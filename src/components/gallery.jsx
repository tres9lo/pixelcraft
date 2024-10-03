import React, { useState } from 'react';
import './Gallery.css'; 

const Gallery = () => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <p className="gallery-description">Dive into our interactive and animated gallery! Enjoy a new experience with every hover.</p>
            
            <div className="gallery-grid">
                <div className="gallery-item" onClick={() => openLightbox('dev3.jpg')}>
                    <img src="dev3.jpg" alt="Gallery Item 1" />
                </div>
                <div className="gallery-item" onClick={() => openLightbox('dev2.jpg')}>
                    <img src="dev2.jpg" alt="Gallery Item 2" />
                </div>
                <div className="gallery-item" onClick={() => openLightbox('dev4.jpg')}>
                    <img src="dev4.jpg" alt="Gallery Item 3" />
                </div>
                <div className="gallery-item" onClick={() => openLightbox('dev5.jpg')}>
                    <img src="dev5.jpg" alt="Gallery Item 4" />
                </div>
            </div>

            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <img src={lightboxImage} alt="Enlarged View" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
