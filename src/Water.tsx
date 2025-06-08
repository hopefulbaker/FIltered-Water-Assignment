import Button from "./Button";
import AnimatedContent from "./AnimatedContent";

function Water() {
  const handleClick = () => { };

  return (
    <div>
      <Button title="Filter!" handleClick={handleClick}
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

