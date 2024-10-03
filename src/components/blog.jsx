import React from 'react';
import './blog.css';

const About = () => {
    return (
        <div className="blog-container">
            <header className="blog-header">
                <h1>Welcome to Our Blog</h1>
                <p>Explore interesting articles, insights, and tips!</p>
            </header>

            <section className="blog-posts">
                <div className="post">
                    <img src="dev1.jpg" alt="Blog Post 1" className="post-image" />
                    <div className="post-content">
                        <h2>Blog Post Title 1</h2>
                        <p>This is the content of the first blog post. It contains interesting information about various topics.</p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>

                <div className="post">
                    <img src="dev2.jpg" alt="Blog Post 2" className="post-image" />
                    <div className="post-content">
                        <h2>Blog Post Title 2</h2>
                        <p>This is the content of the second blog post. It also contains valuable insights and engaging content.</p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>

                <div className="post">
                    <img src="dev3.jpg" alt="Blog Post 3" className="post-image" />
                    <div className="post-content">
                        <h2>Blog Post Title 3</h2>
                        <p>This is the content of the third blog post. It covers a variety of interesting topics.</p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default About;
