import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

emailjs.init("IVz7LXyHI120ocqLJ"); // Initialize EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_fj9t5fd',
            'template_6rtwe23',
            e.target, // Pass form directly
            'IVz7LXyHI120ocqLJ'
        )
        .then((response) => {
            console.log('Success!', response);
            setStatus('✅ Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        })
        .catch((error) => {
            console.error('Email error:', error);
            setStatus('❌ Failed to send message. Please try again.');
        });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-info">
                Feel free to reach out to me for any questions or opportunities.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
                {status && <p className="contact-status">{status}</p>}
            </form>
        </div>
    );
};

export default Contact;
