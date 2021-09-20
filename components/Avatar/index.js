import {React, useEffect, useRef} from 'react'
import Jazzicon from "@metamask/jazzicon"
import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

import styles from './avatar.module.css'

export default function Avatar(){
  
  const { activateBrowserWallet, account } = useEthers()  
  let etherBalance = useEtherBalance(account)

    useEffect(() => {
      var body = document.getElementById('avatar')
      var el = Jazzicon(16, account)
      body.appendChild(el)

    }, [])

    return (
        <>
            <div className={`${styles.card}`}>
                <strong>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH </strong>
                <span class={styles.account}>{account &&
            `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
            )}`} <icon id="avatar"></icon></span>                
            </div>
        </>
    )
}