import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                HOME <i class="fab fa-apple"/>
                </Li nk> 
            </div>
        </nav>
        </>
    )
}

export default Navbar