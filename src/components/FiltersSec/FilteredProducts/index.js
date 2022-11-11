import React from "react";
import Card from "../../Features/Card";
import Style from "./styles.module.css";

const FilteredProducts = ({ data, selected, sortby }) => {
  const filteredArray = data.filter((product) => {
    // console.log(product.category);
    return product.category === selected;
  });
  const sortedProducts = filteredArray.sort((p1, p2) => {
    if (sortby === "price") {
      return p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0;
    }
    else if (sortby === "rating") {
      return p1.rating.rate < p2.rating.rate ? 1 : p1.rating.rate > p2.rating.rate ? -1 : 0;
    }
    else if (sortby === "count") {
      return p1.rating.count < p2.rating.count ? 1 : p1.rating.count > p2.rating.count ? -1 : 0;
    } else return 0;
  });
  return (
    <div className={Style.container}>
      {sortedProducts.map((product, index) => {
        return (
          <Card
            images={[product.image]}
            description={product.description}
            price={product.price}
            isNew={""}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default FilteredProducts;
