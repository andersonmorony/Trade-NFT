import React from "react";
import styles from "./footer.module.css";
import Link from 'next/link'

export default () => {
  return (
    <footer>
      <div className={`container-fluid float-start ${styles.footer}`}>
        <div className="row">
          <div className={`col-12 ${styles.logo}`}>
          <Link href="/">
           <a> <i class="bi bi-collection-play-fill"></i></a>
           </Link>
          </div>
          <div className="col-sm-12">
            <ul class="nav">
              <li class="nav-item">
              <Link href="/tokens">
                <a class="nav-link active" aria-current="page" href="#">
                  Explore
                </a>
              </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Activity
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Favorite
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`container-fluid float-start ${styles.redeSocial}`}>
        <div className="row justify-content-center">          
          <div className="col-sm-2">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-discord"></i>
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
