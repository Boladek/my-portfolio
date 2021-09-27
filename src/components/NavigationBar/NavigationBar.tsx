import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar() {

    return (
        <div className="navigation-bar">
            <h1><Link to="/" className="home">Boladek.</Link></h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </div>
    )
}
