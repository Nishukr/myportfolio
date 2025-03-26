import React from "react";
import { NavLink } from "react-router-dom";
import "./header_styles.css";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 shadow-md p-5 flex justify-between items-center text-white">
      {/* Stylish Name */}
      <h1 className="text-5xl font-extrabold tracking-wide font-serif italic">
        Nishu <span className="text-yellow-300">Kumar</span>
      </h1>

      <nav>
        <ul className="flex space-x-8 text-lg font-medium">
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
            {/* Download Resume Button */}
            <a
              href="/_Nishu kumar resume (4)-1.pdf" // Make sure resume.pdf is inside the public folder
              download="Nishu_Kumar_Resume.pdf"
              className="bg-yellow-400 text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-200"
            >
               Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
