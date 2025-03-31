import React from 'react';
import "./About.css";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div 
            className="about-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated Software Engineer Title */}
            <motion.h1 
                className="animated-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                🚀 <span className="highlight-i">Software Engineer</span> 🚀
            </motion.h1>

            {/* Profile Image with Hover Effect */}
            <motion.img 
                src="/media/images/my dhimprapur img.jpg" 
                alt="Nishu Kumar" 
                className="profile-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            />
            
            <h1 className="about-title">About Me</h1>

            {/* Animated About Section */}
            <motion.div 
                className="about-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <p className='about-page'>
                    <strong>Hello! I'm <span className="highlight">Nishu Kumar</span></strong>—a passionate **<span className="highlight">Software Engineer</span>** with a love for **problem-solving** and **building scalable applications**.
                </p>

                <p className='about-page1'>
                    <span className="section-title">💡 Why Software Engineering?</span>  
                    Since my early days, I've been fascinated by how technology can solve real-world problems. Whether it's **optimizing code, designing user-friendly interfaces, or debugging complex issues**, I enjoy every challenge that comes my way!
                </p>

                <p className='about-page2'>
                    <span className="section-title">🔥 My Passion:</span>  
                    I thrive in **<span className="highlight">competitive programming</span>**, love exploring **<span className="highlight">data structures & algorithms</span>**, and enjoy working on **<span className="highlight">full-stack web development</span>** projects that have real impact.
                </p>

                <p className='about-page4'>
                    <span className="section-title">🚀 What Drives Me?</span>  
                    I believe in **writing clean, optimized, and scalable code** that makes a difference. Every project I work on is an opportunity to learn and push my limits.
                </p>

                <p className='about-page5'>
                    <span className="section-title">🎯 My Goal:</span>  
                    To **build impactful software**, contribute to open-source projects, and continuously grow as a **developer & innovator**.
                </p>

                <p className='about-page6'>
                    <span className="section-title">📩 Let's Connect!</span>  
                    If you have exciting projects, internship opportunities, or want to discuss **technology & problem-solving**, feel free to reach out!
                </p>
            </motion.div>
        </motion.div>
    );
};

export default About;
