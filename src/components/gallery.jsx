import React from 'react';
import './Gallery.css'; // Import the CSS file for styling

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <p className="gallery-description">Dive into our interactive and animated gallery! Enjoy a new experience with every hover.</p>
            
            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src="dev3.jpg" alt="Gallery Item 1" />
                </div>
                <div className="gallery-item">
                    <img src="dev2.jpg" alt="Gallery Item 2" />
                </div>
                <div className="gallery-item">
                    <img src="dev4.jpg" alt="Gallery Item 3" />
                </div>
                <div className="gallery-item">
                    <img src="dev5.jpg" alt="Gallery Item 4" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
