import React from 'react';
import './Footer.css'; // Ensure to create this CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>EMLOOPS is a leading development company delivering high-quality software solutions with a focus on innovation and cutting-edge technology.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: support@emloops.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Developer Lane, Code City</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 EMLOOPS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
