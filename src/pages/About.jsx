import React from 'react';
import "./About.css";


const About = () => {
    return (
        <div className="about-container">
            <img 
                src="\media\images\my dhimprapur img.jpg" 
                alt="Nishu Kumar" 
                className="profile-image"
            />
            <h1 className="about-title">About Me</h1>
            <p className='about-page'>
                My name is <strong>Nishu Kumar</strong>. I am a passionate programmer pursuing my Bachelor of Technology at <strong>Jai Narain College of Technology</strong>.
            </p>
            <p className='about-page1'>
                I completed my 12th grade at <strong>Saraswati Shishu Mandir</strong>, achieving an impressive <strong>83.6%</strong>. Additionally, I completed my 10th grade at <strong>Abhinav Shishu Vidya Mandir</strong>, where I secured a remarkable <strong>92%</strong>.
            </p>
            <p className='about-page2'>
                I proudly hail from <strong>Raigarh, Chhattisgarh</strong>.
            </p>

           
        </div>
    );
};

export default About;
