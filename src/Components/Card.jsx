import React from "react";

const Card = ({ name, color }) => {
    return (
    <div className="card">
        <p>Hola {name}!</p>
        <p>Tu color favorito entonces es el: {color}</p>
    </div>
    );
    };

export default Card;
