import React from "react";
import "./styles.css"

const ExploreCardImg = () => {
  const src = "./assets/images/7.png";
  return (
    <div className="explore-CImg">
      <div className="line"></div>
      <p className="date">FIELDTESTED. JANUARY 19, 2017</p>
      <h3>Kérastase: A Collaboration</h3>
      <img src={src} />
    </div>
  );
};

export default ExploreCardImg;
