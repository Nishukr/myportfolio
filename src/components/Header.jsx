import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header_styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      {/* Logo */}
      <h1 className="logo">
        Nishu Kumar
      </h1>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "show-menu" : ""}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>
              Contact Me
            </NavLink>
          </li>
          <li>
            {/* Resume Button */}
            <a href="\Nishu kumar.pdf" download="Nishu kumar.pdf" className="download-resume" onClick={closeMenu}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
