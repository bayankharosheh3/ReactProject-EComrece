import React from "react";
import CartItem from "./CartItem";
import Style from "./styles.module.css";
const Cart = () => {
  return (
    <div className={Style.container}>
      <h2>Shopping Cart</h2>
      <div className={Style.basketLabels}>
        <ul className={Style.labels}>
          <li className={Style.item}>Item</li>
          <li className={Style.price}>Price</li>
          <li className={Style.quantity}>Quantity</li>
          <li className={Style.subtotal}>Subtotal</li>
        </ul>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default Cart;
