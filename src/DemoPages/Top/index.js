import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      document.querySelector(".navbar").className = "navbar scroll";
      const links = document.getElementsByClassName("nav-links");
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#fff";
      }
    } else {
      document.querySelector(".navbar").className = "navbar";
      const links = document.getElementsByClassName("nav-links");
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#34000d";
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (

      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

  );
}

export default Navbar;
