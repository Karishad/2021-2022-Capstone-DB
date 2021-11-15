import React from "react";
import '../App.css'
import { Link } from 'react-router-dom'

export default function NavBar() {

    const navStyle={
        color: 'white'
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/create'>
                    <li>Create</li>
                </Link>
                <Link style={navStyle} to='/find'>
                    <li>Find</li>
                </Link>
            </ul>
        </nav>
    );
}