import styles from "./styles.module.css";
import LeftIcons from "./LeftIcons";
import RightIcons from "./RightIcons";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const toggle = () => {
    setIsActive((current) => !current);
  };

  const matterSrc = "./assets/images/matter.jpg";
  const iconsSrc = [
    "./assets/icons/search.svg",
    "./assets/icons/heart.svg",
    "/assets/icons/shape.svg",
  ];
  const h2List = ["shop", "fabric", "journal", "about"];

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <img src={matterSrc} className={styles.matterIcon} />
        <div
          className={isActive ? styles.leftIcon : styles.dNone}
          id="leftIcon"
        >
          <LeftIcons hList={h2List} />{" "}
        </div>
      </div>
      <div className={styles.rightSide}>
        <RightIcons src={iconsSrc} />
      </div>
      <button className={styles.menuBtn} onClick={toggle}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  );
};

export default Header;
