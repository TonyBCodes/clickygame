// JavaScript source code
import React from "react";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Clicky Cat Memory Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Reset Game <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <p className="nav-item active">{props.score} of 12</p>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
