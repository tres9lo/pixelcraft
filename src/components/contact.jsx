import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out to us!</p>

            <form className="contact-form" action="" method="post">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <input type="submit" value="Submit" className="submit-button" />
            </form>
        
        </div>
    );
};

export default Contact;
