import { FaLink } from "react-icons/fa";
import styles from "../projects.module.scss";
import { config, useSpring, animated } from "react-spring";
import useHoverAnimation from "./useHoverAnimation";
import Link from "next/link";

const WebLinkButton = () => {
  const { scale, handleMouseEnter, handleMouseLeave } = useHoverAnimation();

  return (
    <animated.div
      className={styles.buttons_weblink}
      style={{ scale: scale.to((value) => value) }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="https://github.com">
        <FaLink />
      </Link>
    </animated.div>
  );
};
export default WebLinkButton;
