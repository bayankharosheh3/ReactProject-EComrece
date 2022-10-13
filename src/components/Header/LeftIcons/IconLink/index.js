import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const IconLink = ({ listItem }) => {
  return (
    <a className={styles.iconLink}> 
      <span>{listItem}</span>
      <FontAwesomeIcon icon={faAngleDown} className="aws-icon"/>
    </a>
  );
};

export default IconLink;
