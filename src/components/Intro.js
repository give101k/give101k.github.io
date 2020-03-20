import React from "react";
import Avatar from "../img/avatars/avatar.jpg";

function Intro() {
    return(
        <section className="portfolio-block block-intro">
            <div className="container">
                <div className="avatar" style={{backgroundImage:`url(${Avatar})`}}></div>
                <div className="about-me">
                    <p>Hello! I am <strong>Brandon Hanlon</strong>. I work as interface and front end developer. I have passion for pixel perfect, minimal and easy to use interfaces.</p><a className="btn btn-outline-primary" role="button" href="#">Hire me</a></div>
            </div>
        </section>
    );
  }
  
  export default Intro;
  