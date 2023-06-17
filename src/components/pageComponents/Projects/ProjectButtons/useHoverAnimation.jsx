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
      config: { tension: 50, friction: 2 },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScale({ scale: 1, loop: false, config: { tension: 200, friction: 2 } });
  };

  return { scale, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave };
};
export default useHoverAnimation;
