import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const handleLogout = () => {
        // Logic for logout functionality
        console.log('User logged out');
    };

    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Sidebar;