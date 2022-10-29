import React, { useState } from "react";
import Styles from "./styles.module.css";
const ForthRow = () => {
  const [quantity, setQuantity] = useState(1);

  const handelClickPlus = () => {
    setQuantity(quantity + 1);
  };

  const handelClickMinus = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={Styles.forthRow}>
      <h6>Quantity</h6>
      <div className={Styles.btns}>
        <div className={Styles.plus}>
          <button className={Styles.minusPlus} onClick={handelClickPlus}>
            +
          </button>
          <span>{quantity}</span>
          <button className={Styles.minusPlus} onClick={handelClickMinus}>
            -
          </button>
        </div>
        <button className={Styles.addBtn}>Add to cart</button>
        <div className={Styles.wishList}>
          <span>?</span>
          <button>Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ForthRow;
