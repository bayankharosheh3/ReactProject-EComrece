import React from "react";
import ShopCard from "./ShopCard";
import "./styles.css"

const Shop = () => {
  return (
    <section className="shop-sec">
      <h2>Shop</h2>
      <div className="shop-cards">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </section>
  );
};

export default Shop;
