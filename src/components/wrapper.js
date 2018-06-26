// JavaScript source code
import React from "react";
import Navbar from "./navbar";
import Board from "./board";
import Card from "./card";

const Wrapper = (props) => (

    <div className="container">
        <Navbar
            score={props.score}
        />

        <Board>
            {props.cats_arr.sort(() => 0.5 - Math.random()).map((cat) => (
                <Card
                    image={cat.image}
                    id={cat.id}
                    key={cat.id}
                    clicked={cat.clicked}
                    handleInput={props.handleInput}
                />))}
        </Board>
    </div>
);

export default Wrapper;