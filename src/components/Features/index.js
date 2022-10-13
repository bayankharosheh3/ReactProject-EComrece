import React from "react";
import Title from "../Title";
import Card from "./Card";
import styles from "./styles.module.css";

const Features = () => {
  const secTitle = "features";
  const cards = [
    {
      img: "./assets/images/4.png",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "new",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "new",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "new",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "new",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "new",
    },
    {
      img: "",
      para: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: "",
    },
  ];
  return (
    <section className={styles.featuresSec}>
      <Title titleIs={secTitle} />
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Features;
