import React from "react";
import Card from "./Card";
import "./styles.css";

const Features = () => {
  return (
    <section className="features-sec">
      <h2>Features</h2>
      <div className="cards">
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
