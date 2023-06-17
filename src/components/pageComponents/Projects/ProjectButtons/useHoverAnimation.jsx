import { useState } from "react";
import { config, useSpring, animated } from "react-spring";

const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [{ scale }, setScale] = useSpring(() => ({ scale: 1 }));

  const handleMouseEnter = () => {
    setIsHovered(true);
    setScale({
      //   y: -20,
      scale: 1.2,
      loop: { reverse: true },
      config: { tension: 100, friction: 10 },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScale({
      scale: 1,
      loop: false,
      config: { tension: 500, friction: 10 },
    });
  };

  return { scale, handleMouseEnter, handleMouseLeave };
};
export default useHoverAnimation;
