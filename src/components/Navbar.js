import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div className="container">
        <a className="navbar-brand logo" href="/">
          Brandon Hanlon
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link className="nav-link" to="/cv">CV</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
