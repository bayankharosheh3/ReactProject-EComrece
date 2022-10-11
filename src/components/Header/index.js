import "./styles.css";
import LeftIcons from "./LeftIcons";
import RightIcons from "./RightIcons";

const Header = () => {
  const matterSrc = "./assets/images/matter.jpg";
  return (
    <div className="header">
      <div className="left-side">
        <img src={matterSrc} className="matter-icon" />
        <LeftIcons />
      </div>
      <RightIcons />
    </div>
  );
};

export default Header;
