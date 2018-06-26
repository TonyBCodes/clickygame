// JavaScript source code
import React from "react";
import Navbar from "./navbar";
import Board from "./board";
import Card from "./card";

const Wrapper = (props) => (

    <div class="container">
        <Navbar
            score={props.score}
        />

        <Board>
            {props.cats_arr.map((cat) => (
                <Card
                    image={cat.image}
                />))}
        </Board>
    </div>
);

export default Wrapper;