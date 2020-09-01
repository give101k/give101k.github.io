import React from "react";
import Avatar from "../img/avatars/brandon-hanlon.jpg";
import Web1 from "../img/projects/Screen Shot 2019-05-06 at 9.42.42 AM.jpg";
import Web2 from "../img/projects/Screen Shot 2019-05-06 at 9.43.23 AM.png";

function Intro() {
  return (
    <>
      <section className="portfolio-block block-intro">
        <div className="container">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${Avatar})` }}
          ></div>
          <div className="about-me">
            <p>
              Hello! I am <strong>Brandon Hanlon</strong>. I am recent college
              student that graduated May 2020 from Montclair State University. I
              have a passion for robotics, AI, and web development.
            </p>
            <a
              className="btn btn-outline-primary"
              role="button"
              href="/contact"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
      <section className="portfolio-block photography">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <a href="#">
                <img className="img-fluid image" src={Web1}></img>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <a href="#">
                <img className="img-fluid image" src={Web1}></img>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item zoom-on-hover">
              <a href="#">
                <img className="img-fluid image" src={Web1}></img>
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
