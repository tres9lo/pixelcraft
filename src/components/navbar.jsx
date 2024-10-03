import React from 'react';
import './navbar.css'; 
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const currentPage = location.pathname.substring(1); // Gets the path without the leading "/"

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                <h2 className="logo">EMLOOPS</h2>
            </Link>
            <div className="navbar-links">
            <Link to='/Home' className={`link ${currentPage === 'Home' ? 'active' : ''}`}>HOME</Link>
    <Link to='/Blog' className='link'>BLOG</Link>
    <Link to='/Gallery' className='link'>GALLERY</Link>
    <Link to='/Contact' className='link'>CONTACT</Link>
</div>

        </nav>
    );
};

export default Navbar;
