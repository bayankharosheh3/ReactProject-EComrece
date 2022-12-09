import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const RightIcons = ({ src }) => {
  const productsNumber = 8;
  return (
    <div className={styles.rightIcon}>
      <Link className={styles.loginLink} to="login">
        Login
      </Link>
      {src.map((item, index) => (
        <Link key={index} to={item.to} className={styles.linkIcon}>
          <img src={item.src} className={styles.icons} />
          {item.to == "cart" && productsNumber !== 0 ? (
            <div className={styles.number}>{productsNumber}</div>
          ) : (
            <></>
          )}
        </Link>
      ))}
    </div>
  );
};

export default RightIcons;
