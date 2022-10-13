import React from "react";
import Title from "../Title";
import Card from "./Card";
import styles from "./styles.module.css";

const Features = () => {
  const secTitle = "featured";
  const items = [
    {
      img: "./assets/images/3.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "new",
    },
    {
      img: "./assets/images/4.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "new",
    },
    {
      img: "./assets/images/14.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "new",
    },
    {
      img: "./assets/images/15.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "",
    },
    {
      img: "./assets/images/16.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "new",
    },
    {
      img: "./assets/images/17.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "",
    },
    {
      img: "./assets/images/18.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "new",
    },
    {
      img: "./assets/images/19.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      isNew: "",
    },
  ];
  return (
    <section className={styles.featuresSec}>
      <Title titleIs={secTitle} />
      <div className={styles.cardsCon}>
        {items.map((item) => (
          <>
            <Card {...item}/>
          </>
        ))}
      </div>
   
    </section>
  );
};

export default Features;
