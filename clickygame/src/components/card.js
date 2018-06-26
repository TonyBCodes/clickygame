import React from "react";
import "./card.css";

const Card = (props) => (
   
    <div onClick={() => props.handleInput(props.id)} className="card">
        
            <img alt="pics" src={props.image} />

    </div>
);

export default Card;
