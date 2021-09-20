import {React, useEffect, useRef } from "react"
import styles from "./menu.module.css"
import WallatInfo from '../Avatar'
import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import Link from 'next/link'



export default function Menu() {
  const { activateBrowserWallet, account } = useEthers() 

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav}`}>
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" href="#">
          <h2><i class="bi bi-collection-play-fill"></i></h2>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link href="/tokens">
              <a className="nav-link active" aria-current="page">
                Explore
              </a>
            </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Activity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Favorite
              </a>
            </li>
          </ul>
        </div>
        
        <form className="d-flex">

        {account ?
        <WallatInfo /> :
        <button onClick={() => activateBrowserWallet()} className="btn btn-dark center" type="button"><img src="/metamask.svg" width="30px" /> Connect to wallet</button>
        }
      </form>
      </div>
    </nav>
  );
};
