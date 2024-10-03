import React, { useState, useEffect } from 'react';
import './blog.css';

const Blog = () => {
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [posts] = useState([ // No need to use setPosts since posts don't change
        { title: 'Blog Post Title 1', content: 'This is the content of the first blog post.', category: 'Development', imgSrc: 'dev1.jpg' },
        { title: 'Blog Post Title 2', content: 'This is the content of the second blog post.', category: 'Design', imgSrc: 'dev2.jpg' },
        { title: 'Blog Post Title 3', content: 'This is the content of the third blog post.', category: 'Development', imgSrc: 'dev3.jpg' }
    ]);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [category, setCategory] = useState('All');

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (category === 'All' || post.category === category)
        );
        setFilteredPosts(filtered);
    }, [searchQuery, category, posts]);

    return (
        <div className="blog-container">
            {loading ? (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
                    <header className="blog-header">
                        <h1>Welcome to Our Blog</h1>
                        <p>Explore interesting articles, insights, and tips!</p>
                    </header>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="category-filter">
                        <button onClick={() => setCategory('All')}>All</button>
                        <button onClick={() => setCategory('Development')}>Development</button>
                        <button onClick={() => setCategory('Design')}>Design</button>
                    </div>

                    {/* Featured Post */}
                    <section className="featured-post">
                        <img src="dev2.jpg" alt="Featured Post" className="featured-image" />
                        <div className="featured-content">
                            <h2>Featured Blog Post</h2>
                            <p>This is the content of the featured blog post. It gives a highlight of what’s trending.</p>
                            <button className="read-more">Read More</button>
                        </div>
                    </section>

                    {/* Blog Posts */}
                    <section className="blog-posts">
                        {filteredPosts.map((post, index) => (
                            <div className="post" key={index}>
                                <img src={post.imgSrc} alt={post.title} className="post-image" />
                                <div className="post-content">
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                    <button className="read-more">Read More</button>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Back to Top Button */}
                    <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        ↑ Back to Top
                    </button>
                </>
            )}
        </div>
    );
};

export default Blog;
