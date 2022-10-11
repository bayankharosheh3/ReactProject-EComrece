import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const src = "./assets/images/2.png";

const Slider = () => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${src})` }}>
      <button className="slide-btn left">
        <FontAwesomeIcon icon={faAngleLeft} className="slide-arrow" />
      </button>
      <div className="slider-container">
        <div className="slider-content">
            <h1>Perfume Tips Tricks</h1>
            <a>Shop Now</a>
            <div className="line"></div>
        </div>
      </div>
      <button className="slide-btn right">
        <FontAwesomeIcon icon={faAngleRight} className="slide-arrow" />
      </button>
    </div>
  );
};

export default Slider;
