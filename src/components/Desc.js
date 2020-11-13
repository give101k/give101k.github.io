import React from "react";
import Avatar from "../img/avatars/brandon-hanlon.jpg";

function Desc() {
  return (
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
  );
}

export default Desc;