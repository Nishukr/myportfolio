import React from "react";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin, FaCode } from "react-icons/fa6"; // Added FaCode for GFG
import { SiLeetcode } from "react-icons/si"; // LeetCode Icon
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
              {/* Download Resume Button */}
              <a
                href="/_Nishu kumar resume (4)-1.pdf"
                download="Nishu_Kumar_Resume.pdf"
                className="bg-yellow-400 text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-200"
              >
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
          <a href="https://www.linkedin.com/in/nishu-kumar-114bb5256/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/nishuk40136tz/?_gl=1*1e8yopg*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw4v6-BhDuARIsALprm33yoBi6PJHl690fwXaS3kr2eeVs3BQmu1bIQs90L7EpX4zkjTFTx8IaAizkEALw" target="_blank" rel="noopener noreferrer">
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
