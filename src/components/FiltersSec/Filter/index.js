import React from "react";
import Style from "./styles.module.css";

const Filter = ({ data, select }) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handelClick = (category) => {
    select(category);
  };

  return (
    <div className={Style.container}>
      <div className={Style.headContainer}>
        <span className={Style.span1}>Filters</span>
        <span className={Style.span2}>Reset</span>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={Style.selectCategory}
              onClick={() => handelClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
