import { FaGithub } from "react-icons/fa";
import styles from "../projects.module.scss";
import { config, useSpring, animated } from "react-spring";
import useHoverAnimation from "./useHoverAnimation";

const GithubButton = () => {
  const { scale, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave } =
    useHoverAnimation();
  return (
    <animated.div
      className={styles.buttons_github}
      // style={{ transform: scale.to((value) => `translateY(${value}px)`) }}
      style={{ scale: scale.to((value) => value) }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaGithub />
    </animated.div>
  );
};
export default GithubButton;
