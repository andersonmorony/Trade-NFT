const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

let market;
let marketAddress;
let nft;

beforeEach( async () =>{

  const Market = await ethers.getContractFactory("NFTMarket");
  market = await Market.deploy();
  await market.deployed();
  marketAddress = market.address;

  const NFT = await ethers.getContractFactory("NFT");
  nft = await NFT.deploy(marketAddress);
  await nft.deployed();
});

describe("Market", () => {
  it("Should return the price", async () => {

    let listPrice = await market.getListingPrice();
    listPrice = ethers.utils.formatUnits(listPrice, 'ether');
    expect(listPrice).to.equal('0.025');

  });

  it('should return Address NFT', async () =>{    
    expect(nft.address.length).to.have.greaterThan(0);
  });

  it('Should create a new Token', async () =>{
    const token = await nft.createToken('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    const tokenUri = await nft.tokenURI(1);
    expect(token.hash.length).to.have.greaterThan(0);
    expect(tokenUri).to.equal('https://www.youtube.com/watch?v=1v_-9n-QDyY');

  });

  it('should create a item to sell', async () => {    
    let listPrice = await market.getListingPrice();
    const itemPrice = ethers.utils.parseUnits('1', 'ether')
    await nft.createToken('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    await market.createMarketItem(nft.address, 1, itemPrice, "music", { value: listPrice.toString() });
    const tokens = await market.fetchMarketItems();
        
    const items = await Promise.all(tokens.map(async (item) => {
      const tokenUri = await nft.tokenURI(item.tokenId)
      let newItem = {
        Id: item.itemId.toString(),
        nftContract: item.nftContract,
        tokenId: item.tokenId.toString(),
        seller: item.seller,
        owner: item.owner,
        price: item.price.toString(),
        sold: item.sold,
        category: item.category,
        tokenUri
      }
      return newItem
    }));
    expect(items.length).to.equal(1);
    expect(items[0].tokenUri).to.equal('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    expect(items[0].price).to.equal(itemPrice);
    expect(items[0].category).to.equal('music');
  });

  it('should return my items created', async () => {
    let listPrice = await market.getListingPrice();
    const itemPrice = ethers.utils.parseUnits('1', 'ether')
    await nft.createToken('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    await market.createMarketItem(nft.address, 1, itemPrice, "music", { value: listPrice.toString() });

    const tokens = await market.fecthItemsCreated();

    expect(tokens.length).to.equal(1);
  });
  
  it('should return zero items', async () => {
    let listPrice = await market.getListingPrice();
    const itemPrice = ethers.utils.parseUnits('1', 'ether')
    await nft.createToken('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    await market.createMarketItem(nft.address, 1, itemPrice, "music", { value: listPrice.toString() });

    const tokens = await market.fetchMyNFTs();

    expect(tokens.length).to.have.lessThan(1);
  });

  it('should not sold a item', async () => {
    let listPrice = await market.getListingPrice();
    const itemPrice = ethers.utils.parseUnits('1', 'ether')
    await nft.createToken('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    await market.createMarketItem(nft.address, 1, itemPrice, "music", { value: listPrice.toString() });

    const [_, buyerAddress] = await ethers.getSigners()
    try{

      await market.connect(buyerAddress).createMarketSale(nft.address, 1, { value: listPrice.toString()})
      const tokens = await market.connect(buyerAddress).fetchMyNFTs();
      expect(tokens.length).to.have.lessThan(1);

    } catch(e){
      assert.isNotOk(false);
    }
    
  })

  it('should sold a item and owner received the listing price', async () => {

    const [owner] = await ethers.getSigners();
    const provider = await ethers.provider;
    const ownerBalance = await provider.getBalance(owner.address);

    let listPrice = await market.getListingPrice();
    const itemPrice = ethers.utils.parseUnits('10', 'ether')
    await nft.createToken('https://www.youtube.com/watch?v=1v_-9n-QDyY');
    await market.createMarketItem(nft.address, 1, itemPrice, "music", { value: listPrice.toString() });

    const [_, buyerAddress] = await ethers.getSigners()
      
    await market.connect(buyerAddress).createMarketSale(nft.address, 1, { value: itemPrice })
    const tokens = await market.connect(buyerAddress).fetchMyNFTs();
    
    const ownerBalanceAfter = await provider.getBalance(owner.address);
    
    expect(tokens.length).to.equal(1);
    assert.notEqual(ownerBalance, ownerBalanceAfter, 'These numbers are not equal');

  })

});
