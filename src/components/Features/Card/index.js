import React from "react";
import styles from "./styles.module.css";

const Card = ({ img, para, price, isNew }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.imgCon}>
        <img src={img} />
        <div className={styles.quickBtn}>
          <button>QUICK VIEW</button>
        </div>
      </div>
      <p>{para}</p>
      <span className={styles.price}>{price}</span>
      <span className={isNew == "new" ? styles.label : styles.empty}>
        {isNew}
      </span>
    </div>
  );
};

export default Card;
