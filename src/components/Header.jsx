// Header.js

import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <img src="logo512.png" alt="Logo" className="logo"/>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact US</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
