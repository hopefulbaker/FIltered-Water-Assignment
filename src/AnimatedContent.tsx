import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  distance?: number;
  reverse?: boolean;
};

const AnimatedContent: React.FC<Props> = ({
  children,
  direction = "horizontal",
  distance = 100,
  reverse = false,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const axis = direction === "vertical" ? "y" : "x";
    const from = reverse ? distance : -distance;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, [axis]: from },
      { opacity: 1, [axis]: 0, duration: 1 },
    );
  }, [direction, distance, reverse]);

  return <div ref={contentRef}>{children}</div>;
};

export default AnimatedContent;
