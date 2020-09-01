import React from "react";

function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="links"><a href="/">About me</a><a href="#">Contact me</a><a href="/projects">Projects</a></div>
        <div className="social-icons"><a href="https://github.com/give101k"><i className="icon ion-social-github"></i></a></div>
      </div>
    </footer>
  );
}
export default Footer;