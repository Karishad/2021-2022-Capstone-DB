import React from "react";
import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../images/UNTbanner.png'

export default function NavBar() {

    const navStyle={
        color: 'white'
    };

    return (
        <nav>
            <img src={logo} alt="Logo"/>
            <ul className="nav-links">
                <Link style={navStyle} to='/create'>
                    <li>Create</li>
                </Link>
                <Link style={navStyle} to='/find'>
                    <li>Find</li>
                </Link>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    );
}