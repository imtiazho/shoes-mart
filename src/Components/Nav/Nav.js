import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <h2>Phone Mart</h2>

            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/order">Order Review</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </div>
    );
};

export default Nav;