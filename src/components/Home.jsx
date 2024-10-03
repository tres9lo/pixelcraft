import React, { useEffect, useState } from 'react';
import './Home.css';

const slides = [
    { id: 1, text: "Innovative Solutions", subtext: "Empowering your digital journey.", image: "dev5.jpg" },
    { id: 2, text: "Custom Software Development", subtext: "Tailored to your needs.", image: "dev3.jpg" },
    { id: 3, text: "Seamless Deployment", subtext: "Effortless software delivery.", image: "dev4.jpg" },
];

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="Home">
            {/* Hero Section */}
            <header className="hero">
                <div className="overlay"></div>
                <div className="slideshow-container">
                    {slides.map((slide, index) => (
                        <div
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            key={slide.id}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="slide-content">
                                <h1 className="slide-text animate-text">{slide.text}</h1>
                                <p className="slide-subtext animate-subtext">{slide.subtext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </header>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Us</h2>
                        <div className="typing-effect">
                            <p>EMLOOPS: Crafting Solutions, Coding Future Digital Lives</p>
                        </div>
                        <p>
                            At EMLOOPS, we harness the power of technology to create innovative, high-performance solutions
                            for businesses worldwide. Our team specializes in custom software development, seamless
                            deployment, and building a digital future.
                        </p>
                        <button className="cta-button about-cta">Learn More</button>
                    </div>
                    <div className="about-image">
                        <img src="dev1.jpg" alt="About EMLOOPS" />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <h2>Our Expertise</h2>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <span>Frontend Development</span>
                        <div className="progress">
                            <div className="progress-fill" style={{ width: '90%' }}>90%</div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span>Backend Development</span>
                        <div className="progress">
                            <div className="progress-fill" style={{ width: '85%' }}>85%</div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <span>UX/UI Design</span>
                        <div className="progress">
                            <div className="progress-fill" style={{ width: '95%' }}>95%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section">
                <h2>Our Work</h2>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src="dev2.jpg" alt="Project 1" />
                        <div className="portfolio-info">
                            <h3>Custom App Development</h3>
                            <p>Built with React, Node.js, and MongoDB</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src="dev1.jpg" alt="Project 2" />
                        <div className="portfolio-info">
                            <h3>eCommerce Platform</h3>
                            <p>Developed using Shopify and PHP</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src="dev3.jpg" alt="Project 3" />
                        <div className="portfolio-info">
                            <h3>API Integration</h3>
                            <p>Implemented with REST APIs and GraphQL</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
