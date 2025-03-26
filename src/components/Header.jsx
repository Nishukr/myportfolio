import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header_styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Logo */}
      <h1 className="logo">
        Nishu kumar
      </h1>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "show-menu" : ""}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : ""}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
              Contact Me
            </NavLink>
          </li>
          <li>
            {/* Resume Button */}
            <a href="/_Nishu kumar resume (4)-1.pdf" download="Nishu_Kumar_Resume.pdf" className="download-resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
