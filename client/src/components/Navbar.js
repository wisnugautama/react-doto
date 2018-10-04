import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"> <Link className="nav-link" to="/">Home</Link> </li>
                <li className="nav-item active"> <Link className="nav-link" to="/heroes">Heroes</Link> </li>
                <li className="nav-item active"> <Link className="nav-link" to="/teams">Teams</Link> </li>
                <li className="nav-item active"> <Link className="nav-link" to="/players">Player</Link> </li>
                <li className="nav-item active"> <Link className="nav-link" to="/about">About</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar