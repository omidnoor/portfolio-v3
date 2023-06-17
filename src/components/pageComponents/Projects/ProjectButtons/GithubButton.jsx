import { FaGithub } from "react-icons/fa";
import styles from "../projects.module.scss";
import { config, useSpring, animated } from "react-spring";
import useHoverAnimation from "./useHoverAnimation";
import Link from "next/link";

const GithubButton = () => {
  const { scale, handleMouseEnter, handleMouseLeave } = useHoverAnimation();
  return (
    <animated.div
      className={styles.buttons_github}
      // style={{ transform: scale.to((value) => `translateY(${value}px)`) }}
      style={{ scale: scale.to((value) => value) }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="https://github.com">
        <FaGithub />
      </Link>
    </animated.div>
  );
};
export default GithubButton;
