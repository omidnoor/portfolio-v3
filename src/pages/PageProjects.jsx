import { useEffect, useMemo, useRef, useState } from "react";

import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";

import styles from "./projects.module.scss";

const pages = [
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/210/300?grayscale",
  "https://picsum.photos/220/300?grayscale",
  "https://picsum.photos/230/300?grayscale",
  "https://picsum.photos/240/300?grayscale",
  "https://picsum.photos/250/300?grayscale",
];

const Projects = () => {
  //   const [aspectRatio, setAspectRatio] = useState(
  //     window.innerWidth / window.innerHeight,
  //   );
  const cam = useRef();
  const index = useRef(0);
  const [domRef, { width }] = useMeasure();
  const [props, api] = useSprings(
    pages.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width],
  );
  // console.log(width);
  const handleDrag = useDrag(
    ({ active, movement: [moveX], direction: [dirX], distance, cancel }) => {
      if (active && distance > width / 2) {
        index.current = clamp(
          index.current + (dirX > 0 ? -1 : 1),
          0,
          pages.length,
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        console.log(width, index.current);
        const x = (i - index.current) * width + (active ? moveX : 0);
        const scale = active ? 1 - (0.7 * distance) / width : 1;
        // console.log(x);
        return { x, scale, display: "block" };
      });
    },
  );

  //   useEffect(() => {
  //     window.addEventListener("resize", () => {
  //       setAspectRatio(window.innerWidth / window.innerHeight);
  //     });
  //     return () => {
  //       window.removeEventListener("resize", () => {});
  //     };
  //   }, [window.innerWidth, window.innerHeight]);

  return (
    <div className={styles.container}>
      <div ref={domRef} className={styles.wrapper}>
        {props.map(({ x, display, scale }, i) => (
          <animated.div
            className={styles.page}
            {...handleDrag()}
            key={i}
            style={{ display, x }}
          >
            <animated.div
              style={{ scale, backgroundImage: `url(${pages[i]})` }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
