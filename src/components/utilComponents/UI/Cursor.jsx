import { useEffect, useRef } from "react";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const cursorRef = useRef();
  useEffect(() => {
    // const cursor = document.querySelector(styles.cursor);
    const mouseCursor = (e) => {
      cursorRef.current.style.left = e.pageX + "px";
      cursorRef.current.style.top = e.pageY + "px";
    };
    window.addEventListener("mousemove", mouseCursor);
    return () => {
      window.removeEventListener("mousemove", mouseCursor);
    };
  });

  return <div className={styles.cursor} ref={cursorRef}></div>;
};
export default Cursor;
