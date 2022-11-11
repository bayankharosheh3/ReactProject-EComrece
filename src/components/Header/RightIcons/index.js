import React from "react";
import styles from "./styles.module.css";

const RightIcons = ({ src }) => {
  return (
    <div className={styles.rightIcon}>
      <a className={styles.loginLink}>
        <span>Login</span>
      </a>
      {src.map((item, index) => (
        <a key={index}>
          <img src={item} className={styles.icons} />
        </a>
      ))}
    </div>
  );
};

export default RightIcons;
