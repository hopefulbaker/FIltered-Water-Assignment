import AnimatedContent from "./AnimatedContent.tsx";
import Filter from "./Filter.tsx";
import { useState } from "react";

function Water() {
  const [showAnimation, setShowAnimation] = useState(false);
  const handleClick = () => {
    setShowAnimation(!showAnimation);
  };

  return (
    <div>
      <button title="Filter!" handleClick={handleClick}></button>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.8}
        animateOpacity
        scale={1.4}
        threshold={0.2}
        delay={0.3}
      >
        <div className="water">And here is the water</div>
      </AnimatedContent>
    </div>
  );
}

export default Water;
