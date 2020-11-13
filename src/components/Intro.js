import React from "react";
import Desc from "./Desc";
import Avatar from "../img/avatars/brandon-hanlon.jpg";
var Web1 = "https://quiet-everglades-10935.herokuapp.com/images/web1.jpg";
var Web2 = "https://quiet-everglades-10935.herokuapp.com/images/human_emote.png"
var Web3 = "https://quiet-everglades-10935.herokuapp.com/images/robot.png";


function Intro() {
  return (
    <>
      <Desc />
      <section className="portfolio-block photography">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <a href="/projects">
                <img className="img-fluid image" src={Web1} style={{ Height: "100%" }}></img>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <a href="/projects">
                <img className="img-fluid image" src={Web2} style={{ Height: "100%" }}></img>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <a href="/projects">
                <img className="img-fluid image" src={Web3} style={{ Height: "100%" }}></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-block call-to-action border-bottom">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center content">
            <h3>Like what you see?</h3>
            <button className="btn btn-outline-primary btn-lg" type="button">
              Contact me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
