import React from "react";
import { NavHashLink } from "react-router-hash-link";
import brandImage from "../assets/images/WebsiteIcon1.png";
import resume from "../assets/files/Resume.pdf";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={brandImage}
            alt="brand"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                to="/"
                activeClassName="selected"
                activeStyle={{ color: "#6f42c1" }}
              >
                Home
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                to="/about"
                activeClassName="selected"
                activeStyle={{ color: "#6f42c1" }}
              >
                About
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                to="/skills"
                activeClassName="selected"
                activeStyle={{ color: "#6f42c1" }}
              >
                Skills
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                to="/projects"
                activeClassName="selected"
                activeStyle={{ color: "#6f42c1" }}
              >
                Projects
              </NavHashLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
