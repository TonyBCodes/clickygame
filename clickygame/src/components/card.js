import React from "react";

const Card = (props) => (
    <div className="card">
        <div className="img-container">
            <img src={props.image} />
        </div>
    </div>
);

export default Card;