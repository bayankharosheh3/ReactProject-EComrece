import React from "react";
import "./styles.css";

const ExploreCard = () => {
    const src="./assets/images/6.png"
  return (
    <div className="explore-card">
      <div className="line"></div>
      <p className="date">FIELDTESTED. JANUARY 19, 2017</p>
      <h3>Connected Clothing: Raye Padit</h3>
      <p className="explore-par">
        As a voice for conscious fashion, Raye Padit is motivated by the belief
        that one person’s actions, no matter how small, holds great impact. This
        core ideal has driven him to start his three passion projects: Connected
        Threads Asia, PeyaR, and Swagalls.
      </p>
      <img src={src}/>
    </div>
  );
};

export default ExploreCard;
