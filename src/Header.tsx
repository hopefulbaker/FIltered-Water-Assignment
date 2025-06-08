import "./Header.css";
import GradientText from "./GradientText.tsx";

const Header = () => {
  return (
    <div className="fullHeader">
      <GradientText
        colors={["#4682B4", "#003153", "#4682B4", "#003153", "#4682B4"]}
        animationSpeed={5}
        showBorder={false}
        className="custom-class"
      >
        The Water Filtering Assignment
      </GradientText>
    </div>
  );
};

export default Header;
