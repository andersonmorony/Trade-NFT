// contracts/Market.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemsIds;
    Counters.Counter private _itemsSold;

    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor(){
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
        string category;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold,
        string category
    ); 

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createMarketItem(address nftContract, uint256 tokenId, uint256 price, string memory category) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Price must be at equal to listing price");

        _itemsIds.increment();
        uint256 itemId = _itemsIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false,
            category
        );

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false,
            category
        );
    }

    function createMarketSale(address nftContract, uint256 itemId) public payable nonReentrant {
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId; // is itemId the same as the tokenId?

        require(msg.value == price, "Please submiit the asking price in order to complete the purchase.");

        idToMarketItem[itemId].seller.transfer(msg.value);

        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _itemsSold.increment();
        payable(owner).transfer(listingPrice);

    }

    function fetchMarketItems() public view returns (MarketItem[] memory){
        uint itemCount = _itemsIds.current(); // image that will be 5
        uint unsoldItemCount = _itemsIds.current() - _itemsSold.current(); // 5 - 2 = 3
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount); // to create a new array with length equal unsoldItemCount or in we image equals 3
        for(uint i = 0; i < itemCount; i++){
            if(idToMarketItem[i + 1].owner == address(0)) { 
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items; 
    }

    function fetchMyNFTs() public view returns(MarketItem[] memory) {
        uint totalItemsCount = _itemsIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemsCount; i++) {
            if(idToMarketItem[i + 1].owner == msg.sender) {
                itemCount++;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemsCount; i++) {
            if(idToMarketItem[i + 1].owner == msg.sender) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }

    function fecthItemsCreated() public view returns(MarketItem[] memory) {
        uint totalItemsCount = _itemsIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemsCount; i++) {
            if(idToMarketItem[i + 1].seller == msg.sender) {
                itemCount++;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemsCount; i++) {
            if(idToMarketItem[i + 1].seller == msg.sender) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }

}