import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={`row ${styles.rowHome}`}>
        <div className={`col-md-6 ${styles.boxText}`}>
          <h1>
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <h5>
            Now you can create token with you favorite music and to be fan
            number #1
          </h5>
          <button type="button" className="btn btn-dark">
            Explore
          </button>
          <button type="button" className="btn btn-light">
            Create
          </button>
        </div>
        <div className={`col-md-6 ${styles.boxImage}`}>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/206px-Youtube_Music_icon.svg.png"
            alt=""
          /> */}
          <i
            className={`bi bi-collection-play-fill ${styles.iconPrincipal}`}
          ></i>
          <p>
            <i className="bi bi-music-note-list"></i> Share a litter of you life
            with ours
          </p>
        </div>
      </div>

      <hr />

      <p className="float-start">
        <img src="https://img.icons8.com/dusk/24/000000/star--v2.png" /> Feature
        item
      </p>
      <button
        type="button"
        className={`btn btn-light float-end ${styles.btnSeeMore}`}
      >
        See more <i className="bi bi-arrow-right"></i>
      </button>

      <div className={`row row-cols-1 row-cols-md-4 g-3 float-start ${styles.featureItems}`}>
        <div className="col">
          <div className={`card h-100 ${styles.cardFeature}`}>
            <iframe
              width="auto"
              height="175"
              src="https://www.youtube.com/embed/by3yRdlQvzs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className={`card-body ${styles.cardBodyFeature}`}>
              <p className="card-text">My music favorite #830</p>
              <small className="text-muted">
                Author: <a href="#">Anderson Moroni</a>
              </small>
            </div>
            <div className="card-footer">
              <small>
                <img src="https://img.icons8.com/color/22/000000/ethereum.png" />{" "}
                Price 0.1 Eth{" "}
              </small>
              <button
                className="btn btn-sm btn-primary float-end"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 ${styles.cardFeature}`}>
            <iframe
              width="auto"
              height="175"
              src="https://www.youtube.com/embed/bCuhuePlP8o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className={`card-body ${styles.cardBodyFeature}`}>
              <p className="card-text">My music favorite #830</p>
              <small className="text-muted">
                Author:
                <a href="#">Anderson Moroni</a>
              </small>
            </div>
            <div className="card-footer">
              <small>
                <img src="https://img.icons8.com/color/22/000000/ethereum.png" />{" "}
                Price 0.1 Eth{" "}
              </small>
              <button
                className="btn btn-sm btn-primary float-end"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 ${styles.cardFeature}`}>
            <iframe
              width="auto"
              height="175"
              src="https://www.youtube.com/embed/hE2Ira-Cwxo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className={`card-body ${styles.cardBodyFeature}`}>
              <p className="card-text">My music favorite #830</p>
              <small className="text-muted">
                Author: <a href="#">Anderson Moroni</a>
              </small>
            </div>
            <div className="card-footer">
              <small>
                <img src="https://img.icons8.com/color/22/000000/ethereum.png" />{" "}
                Price 0.1 Eth{" "}
              </small>
              <button
                className="btn btn-sm btn-primary float-end"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 ${styles.cardFeature}`}>
            <iframe
              width="auto"
              height="175"
              src="https://www.youtube.com/embed/ApXoWvfEYVU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className={`card-body ${styles.cardBodyFeature}`}>
              <p className="card-text">My music favorite #830</p>
              <small className="text-muted">
                Author: <a href="#">Anderson Moroni</a>
              </small>
            </div>
            <div className="card-footer">
              <small>
                <img src="https://img.icons8.com/color/22/000000/ethereum.png" />{" "}
                Price 0.1 Eth{" "}
              </small>
              <button
                className="btn btn-sm btn-primary float-end"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- */}

      <div className={`container float-start ${styles.topArtists}`}>
        <p className="float-start"><img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/34/000000/external-first-success-flatart-icons-lineal-color-flatarticons.png"/> Top Artists</p>
        <button
          type="button"
          className={`btn btn-light float-end ${styles.btnSeeMore}`}
        >
          See more <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <div className="container float-start">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div class="card">
              <div class={`card-body ${styles.cardBody}`}>
                <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/44/000000/external-monster-halloween-costume-avatar-wanicon-lineal-color-wanicon.png" class="rounded float-start" alt="..." />
                <span>Anderson Moroni</span>
                <small className="text-muted"> 158 Items</small>
                <button type="button" className="btn btn-primary float-end btn-sm">Follow</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card h-100">
              <div class={`card-body ${styles.cardBody}`}>
              <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/44/000000/external-evil-halloween-wanicon-lineal-color-wanicon.png" class="rounded float-start" alt="..."/>
                <span>Anderson Moroni</span>
                <small className="text-muted"> 158 Items</small>
                <button type="button" className="btn btn-primary float-end btn-sm">Follow</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card h-100">
              <div class={`card-body ${styles.cardBody}`}>
              <img src="https://img.icons8.com/plasticine/44/000000/black-panther--v2.png" class="rounded float-start" alt="..."/>
                <span>Anderson Moroni</span>
                <small className="text-muted"> 158 Items</small>
                <button type="button" className="btn btn-primary float-end btn-sm">Follow</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <div class={`card-body ${styles.cardBody}`}>
                <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/44/000000/external-monster-halloween-costume-avatar-wanicon-lineal-color-wanicon.png" class="rounded float-start" alt="..." />
                <span>Anderson Moroni</span>
                <small className="text-muted"> 158 Items</small>
                <button type="button" className="btn btn-primary float-end btn-sm">Follow</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card h-100">
              <div class={`card-body ${styles.cardBody}`}>
              <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/44/000000/external-evil-halloween-wanicon-lineal-color-wanicon.png" class="rounded float-start" alt="..."/>
                <span>Anderson Moroni</span>
                <small className="text-muted"> 158 Items</small>
                <button type="button" className="btn btn-primary float-end btn-sm">Follow</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card h-100">
              <div class={`card-body ${styles.cardBody}`}>
              <img src="https://img.icons8.com/plasticine/44/000000/black-panther--v2.png" class="rounded float-start" alt="..."/>
                <span>Anderson Moroni</span>
                <small className="text-muted"> 158 Items</small>
                <button type="button" className="btn btn-primary float-end btn-sm">Follow</button>
              </div>
            </div>
          </div>
          
        </div>        
      </div>
    </>
  );
}
