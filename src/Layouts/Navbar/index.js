import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return <div className="navbar">
        <p className="navbar__title">Github Finder</p>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>;
}

export default Navbar;