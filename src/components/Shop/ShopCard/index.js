import React from "react";
import "./styles.css"
const ShopCard = () => {
  const src = "./assets/images/8.png";
  return (
    <div className="shop-card">
      <img src={src} />
      <div className="type">Pants</div>
    </div>
  );
};

export default ShopCard;
