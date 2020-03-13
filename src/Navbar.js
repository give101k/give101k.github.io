import React from "react";
import avatar from "./img/avatars/avatar.jpg";
import img1 from "./img/nature/image5.jpg";
import img2 from "./img/nature/image2.jpg";
import img3 from "./img/tech/image4.jpg";

const Navbar = props => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container">
          <a className="navbar-brand logo" href="index.html">
            Brandon Hanlon
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="index.htmlnavbarNav"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="projects-grid-cards.html">
                  Projects
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="cv.html">
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="page lanidng-page">
        <section className="portfolio-block block-intro">
          <div className="container">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="about-me">
              <p>
                Hello! I am <strong>Brandon Hanlon</strong>. I work as interface
                and front end developer. I have passion for pixel perfect,
                minimal and easy to use interfaces.
              </p>
              <a
                className="btn btn-outline-primary"
                role="button"
                href="index.html"
              >
                Hire me
              </a>
            </div>
          </div>
        </section>
        <section className="portfolio-block photography">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6 col-lg-4 item zoom-on-hover">
                <a href="#">
                  <img className="img-fluid image" src={img1}></img>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 item zoom-on-hover">
                <a href="#">
                  <img className="img-fluid image" src={img2}></img>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 item zoom-on-hover">
                <a href="#">
                  <img className="img-fluid image" src={img3}></img>
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
                Hire me
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Navbar;
