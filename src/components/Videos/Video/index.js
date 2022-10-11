import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  const src = "./assets/images/9.png";
  return (
    <div className="video-style">
      <img src={src} />
      <div className="run">
        <FontAwesomeIcon icon={faCaretRight} className="video-icon" />
      </div>
      <div className="video-des">
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default Video;
