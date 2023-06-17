import { FaLink } from "react-icons/fa";
import styles from "../projects.module.scss";
import { config, useSpring, animated } from "react-spring";
import useHoverAnimation from "./useHoverAnimation";

const WebLinkButton = () => {
  const { scale, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave } =
    useHoverAnimation();

  return (
    <div
      className={styles.buttons_weblink}
      style={{ transform: scale.to((value) => `translateY(${value}px)`) }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaLink />
    </div>
  );
};
export default WebLinkButton;
