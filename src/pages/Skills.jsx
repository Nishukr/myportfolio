import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact, FaJava, FaGit, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiChartdotjs, SiTailwindcss, SiCplusplus, SiMysql, SiVscodium } from "react-icons/si"; 
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { icon: <FaJava className="skill-icon" />, name: "Java" },
        { icon: <SiCplusplus className="skill-icon" />, name: "C++" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { icon: <FaReact className="skill-icon" />, name: "React.js" },
        { icon: <SiRedux className="skill-icon" />, name: "Redux" },
        { icon: <FaHtml5 className="skill-icon" />, name: "HTML" },
        { icon: <FaCss3Alt className="skill-icon" />, name: "CSS" },
        { icon: <SiTailwindcss className="skill-icon" />, name: "Tailwind CSS" },
        { icon: <FaBootstrap className="skill-icon" />, name: "Bootstrap" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { icon: <FaNodeJs className="skill-icon" />, name: "Node.js" },
        { icon: <SiExpress className="skill-icon" />, name: "Express.js" },
        { icon: <SiMongodb className="skill-icon" />, name: "MongoDB" },
        { icon: <SiMysql className="skill-icon" />, name: "MySQL" },
      ],
    },
    {
      category: "Other Tools",
      items: [
        { icon: <FaGit className="skill-icon" />, name: "Git" },
        { icon: <FaGithub className="skill-icon" />, name: "GitHub" },
        { icon: <SiVscodium className="skill-icon" />, name: "VS Code" },  
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Technical Skills</h1>
      <p className="skills-description">
        Over the past year, I have been dedicated to enhancing my technical expertise across multiple domains.
      </p>

      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-card">
            <h2 className="skill-category">{skillCategory.category}</h2>
            <ul className="skill-list">
              {skillCategory.items.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill.icon} <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
