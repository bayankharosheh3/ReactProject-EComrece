import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styles from "./styles.module.css";
const QuickView = ({
  title,
  image,
  description,
  price,
  rating,
  stock,
  brand,
  category,
  onclick,
}) => {
  const images = [image];
  return (
    <div className={styles.layer}>
      <div className={styles.quickView}>
        <div className={styles.top}>
          <h4>{title}</h4>
          <button onClick={onclick}>
            <p>X</p>
          </button>
        </div>
        <div className={styles.quickContent}>
          <LeftSide images={images} />
          <RightSide
            title={title}
            description={description}
            price={price}
            rating={rating}
            stock={stock}
            brand={brand}
            category={category}
          />
        </div>
        <button className={styles.fullBtn}>View Full product Details</button>
      </div>
    </div>
  );
};

export default QuickView;
