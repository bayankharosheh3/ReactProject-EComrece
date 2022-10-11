import React from "react";
import "./styles.css"

const Card = () => {
  const src = "./assets/images/4.png";
  return (
    <div className="card-content">
        <img src={src} />
        <p>Pueraria Mirifica And Study Phyto Estrogens</p>
        <span className="price">$599.00</span>
        <span className="label">new</span>
    </div>
  );
};

export default Card;
