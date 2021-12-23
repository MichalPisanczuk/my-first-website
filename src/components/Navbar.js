import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                <i class="fab fa-apple"/>
                </Link> 
                <Link to="/about" className="navbar-item">
                About
                </Link> 
                <Link to="/project" className="navbar-item">
                Project
                </Link> 
                <Link to="/contact" className="navbar-item">
                Contact
                </Link> 
            </div>
        </nav>
        </>
    )
}

export default Navbar
