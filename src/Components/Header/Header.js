import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="shop-name">
                <h3>Gran Shop</h3>
            </div>
        <div className="navLink">
            <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/location">Location</a>
            <a href="/contact">Contact</a>
        </div>
        </div>
    );
};

export default Header;