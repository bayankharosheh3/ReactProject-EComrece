import React from "react";
import Style from "./styles.module.css";

const CartItem = () => {
  return (
    <div className={Style.itemRow}>
      <div className={Style.item}>
        <div className={Style.productImage}>
          <img
            src="./assets/images/3.png"
            alt="Placholder Image 2"
            class="product-frame"
          />
        </div>
        <div className={Style.productDetails}>
          <p>Product Code - 232321939</p>
        </div>
      </div>
      <div className={Style.price}>26.00</div>
      <div className={Style.quantity}>
        <input
          type="number"
          value="1"
          min="1"
          className={Style.quantityField}
        />
      </div>
      <div className={Style.subtotal}>104.00</div>
      {/* <div className={Style.remove}>
        <button>Remove</button>
      </div> */}
    </div>
  );
};

export default CartItem;
