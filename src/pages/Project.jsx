import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiChartdotjs, SiTailwindcss } from 'react-icons/si';
import './Project.css';

const Projects = () => {
    const projects = [
        {
            title: "Urban Waste Control",
            image: "/media/images/Screenshot_26-10-2024_3136_localhost.jpeg",
            technologies: [
                { icon: <FaHtml5 className="tech-icon" />, name: "HTML" },
                { icon: <FaCss3Alt className="tech-icon" />, name: "CSS" },
                { icon: <FaJs className="tech-icon" />, name: "JavaScript" },
                { icon: <FaBootstrap className="tech-icon" />, name: "Bootstrap" },
                { icon: <FaNodeJs className="tech-icon" />, name: "Node.js" },
                { icon: <SiExpress className="tech-icon" />, name: "Express.js" },
                { icon: <SiMongodb className="tech-icon" />, name: "MongoDB" }
            ],
            duration: "Aug 2024 - Oct 2024",
            description: (
                <>
                    The <strong>Urban Waste Control System</strong> is a smart waste management platform.
                </>
            ),
        },
        {
            title: "Instock",
            image: "/media/images/Screenshot (137).1.png",
            technologies: [
                { icon: <FaReact className="tech-icon" />, name: "React.js" },
                { icon: <SiRedux className="tech-icon" />, name: "Redux" },
                { icon: <SiChartdotjs className="tech-icon" />, name: "Chart.js" },
                { icon: <FaBootstrap className="tech-icon" />, name: "Bootstrap" },
                { icon: <SiTailwindcss className="tech-icon" />, name: "Tailwind CSS" },
                { icon: <FaNodeJs className="tech-icon" />, name: "Node.js" },
                { icon: <SiExpress className="tech-icon" />, name: "Express.js" },
                { icon: <SiMongodb className="tech-icon" />, name: "MongoDB" }
            ],
            duration: "Dec 2024 - Feb 2025",
            description: (
                <>
                    <strong>Instock</strong> is a web stock application.
                </>
            ),
        },
        {
            title: "Stone Paper Scissors",
            image: "/media/images/stone-paper-scissors.jpg",
            technologies: [
                { icon: <FaHtml5 className="tech-icon" />, name: "HTML" },
                { icon: <FaCss3Alt className="tech-icon" />, name: "CSS" },
                { icon: <FaJs className="tech-icon" />, name: "JavaScript" }
            ],
            description: (
                <>
                    The <strong>Stone Paper Scissors</strong> game is an interactive web-based project.
                </>
            ),
        },
        {
            title: "Flipkart Clone",
            image: "/media/images/flipkart-clone.jpg",
            technologies: [
                { icon: <FaHtml5 className="tech-icon" />, name: "HTML" },
                { icon: <FaCss3Alt className="tech-icon" />, name: "CSS" },
                { icon: <FaJs className="tech-icon" />, name: "JavaScript" }
            ],
            description: (
                <>
                    The <strong>Flipkart Clone</strong> project replicates key e-commerce platform features.
                </>
            ),
        },
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-tech">
                            <strong>Technologies Used:</strong>
                            <div className="tech-icons">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-item">
                                        {tech.icon} {tech.name}
                                    </span>
                                ))}
                            </div>
                        </p>
                        <p className="project-duration"><strong>Duration:</strong> {project.duration}</p>
                        <div className="project-description">{project.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
