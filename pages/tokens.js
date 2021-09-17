import React from "react";
import styles from "./../styles/Tokens.module.css";

export default function Tokens() {
  return (
    <>
      <div className={`container ${styles.containerSearch}`}>
        <div className={`form-group`}>
          <input
            type="text"
            className="form-control"
            placeholder="Search the musics"
          />
        </div>
        <div className={`row-inline ${styles.badge}`}>
            <button class="badge btn btn-primary text-light">Tudo</button>
            <button class="badge btn btn-primary text-light">Funk</button>
            <button class="badge btn btn-primary text-light">Hap</button>
            <button class="badge btn btn-primary text-light">Brega</button>
            <button class="badge btn btn-primary text-light">Sertanejo</button>
        </div>
      </div>
      <hr />
      <div className={`container ${styles.containerTokens}`}>
        <div className={`row`}>
          <h4>You might like</h4>
          <span>Based on your recent</span>

          <div
            className={`row row-cols-1 row-cols-md-4 g-3 float-start ${styles.featureItems}`}
          >
            <div className="col">
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
          <div
            className={`row row-cols-1 row-cols-md-4 g-3 float-start ${styles.featureItems}`}
          >
            <div className="col">
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
              <div className={`card h-100  card-token ${styles.cardFeature}`}>
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
        </div>
      </div>
    </>
  );
}
