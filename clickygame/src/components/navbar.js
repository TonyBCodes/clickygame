// JavaScript source code
import React from "react";

const Navbar = (props) => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Clicky Cat Memory Game</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Reset Game <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <p class="nav-item active">{props.score} of 12</p>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
