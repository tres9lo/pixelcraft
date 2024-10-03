import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);

    const images = [
        { src: 'dev3.jpg', alt: 'Gallery Item 1' },
        { src: 'dev2.jpg', alt: 'Gallery Item 2' },
        { src: 'dev4.jpg', alt: 'Gallery Item 3' },
        { src: 'dev5.jpg', alt: 'Gallery Item 4' }
    ];

    const openLightbox = (index) => {
        setLightboxImage(images[index].src);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setCurrentIndex(null);
    };

    const showNextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setLightboxImage(images[newIndex].src);
    };

    const showPrevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setLightboxImage(images[newIndex].src);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            setComments([...comments, { text: newComment, rating }]);
            setNewComment('');
            setRating(0); // Reset rating
        }
    };

    const handleRatingChange = (rate) => {
        setRating(rate);
    };

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <p className="gallery-description">Dive into our interactive and animated gallery! Enjoy a new experience with every hover.</p>
            
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

            {/* Lightbox with Carousel */}
            {lightboxImage && (
                <div className="lightbox">
                    <span className="close-lightbox" onClick={closeLightbox}>×</span>
                    <button className="prev" onClick={showPrevImage}>‹</button>
                    <div className="lightbox-content">
                        <img src={lightboxImage} alt="Enlarged View" />
                    </div>
                    <button className="next" onClick={showNextImage}>›</button>
                </div>
            )}

            {/* Comments and Reviews Section */}
            <div className="reviews-section">
                <h2>Comments and Reviews</h2>

                {/* Display Comments */}
                <div className="comments-list">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment-item">
                            <p><strong>Rating:</strong> {comment.rating}/5</p>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>

                {/* Add Comment */}
                <div className="add-comment">
                    <textarea
                        value={newComment}
                        placeholder="Write your comment..."
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    
                    {/* Rating Selector */}
                    <div className="rating-selector">
                        <label>Rate this gallery:</label>
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`star ${i < rating ? 'filled' : ''}`}
                                onClick={() => handleRatingChange(i + 1)}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    <button onClick={handleCommentSubmit} className="submit-comment">Submit Comment</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
