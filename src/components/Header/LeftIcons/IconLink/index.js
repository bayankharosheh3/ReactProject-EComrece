import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

const IconLink = () => {
  const h2List = ["shop", "fabric", "journal", "about"];
  
  return h2List.map((item) => (
    <a className="icon-link">
      <span>{item}</span>
      <FontAwesomeIcon icon={faAngleDown} className="aws-icon"/>
    </a>
  ));
};

export default IconLink;
