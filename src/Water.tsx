import AnimatedContent from "./AnimatedContent.tsx";
import Filter from "./Filter.tsx";
import { useState } from "react";

type Props = {
  water: string[];
};

const Water: React.FC<Props> = ({ water }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const handleClick = () => {
    setShowAnimation(!showAnimation);
  };

  return (
    <div>
      <AnimatedContent distance={150} direction="vertical" reverse={true}>
        <div className="water">
          {water.map((item, index) => (
            <span key={index} style={{ marginRight: "8px" }}>
              {item}
            </span>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};
export default Water;
