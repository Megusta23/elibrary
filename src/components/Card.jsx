import React from "react";

import "./styles/card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img src={item.imageLink} alt={item.imageLink} />
      <div className="bottom-left">
        <p className="category">Non-fiction</p>

        <p className="title">{item.name}</p>
      </div>
    </div>
  );
};

export default Card;
