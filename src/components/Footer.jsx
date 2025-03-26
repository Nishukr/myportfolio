import React from "react";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <nav>
          <ul className="footer-nav">
            <li><Link to="/">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="/_Nishu kumar resume (4)-1.pdf" download="Nishu_Kumar_Resume.pdf" className="resume-btn">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://x.com/kr_Nishu_09" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="social-icon" />
          </a>
          <a href="https://github.com/Nishukr" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/nishu-kumar-114bb5256" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/nishuk40136tz" target="_blank" rel="noopener noreferrer">
            <FaCode className="social-icon" title="GeeksforGeeks" />
          </a>
          <a href="https://leetcode.com/u/Nishukumar91090/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="social-icon" title="LeetCode" />
          </a>
        </div>

        <p className="footer-text">© {new Date().getFullYear()} Nishu Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
