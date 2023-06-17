import { useEffect, useMemo, useRef, useState } from "react";

import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";

import styles from "./projects.module.scss";
import { memo } from "react";

import { ProjectsContent as pages } from "./ProjectsContent";
import ProjectPlate from "./ProjectPlate";

const Projects = () => {
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

  const handleDrag = useDrag(
    ({ active, movement: [moveX], direction: [dirX], distance, cancel }) => {
      if (active && distance > width / 3) {
        if (index.current === pages.length - 1 && dirX < 0) {
          cancel();
        } else if (index.current === 0 && dirX > 0) {
          cancel();
        } else {
          index.current = clamp(
            index.current + (dirX > 0 ? -1 : 1),
            0,
            pages.length - 1,
          );
          cancel();
        }
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? moveX : 0);
        const scale = active ? 1 - (0.7 * distance) / width : 1;
        return { x, scale, display: "block" };
      });
    },
    {
      axis: "x",
      filterTaps: true,
      pointer: { touch: true },
    },
  );
  console.log(handleDrag);
  return (
    <div className={styles.container}>
      <div ref={domRef} className={styles.wrapper}>
        {props.map(({ x, display, scale }, i) => (
          <animated.div
            className={styles.page}
            {...handleDrag()}
            key={pages[i].title}
            style={{ display, x }}
          >
            <animated.div
              key={pages[i].title}
              style={{ scale, backgroundImage: `url(${pages[i].link})` }}
              className={styles.projects}
            />
            <ProjectPlate index={i} pages={pages} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};
export default memo(Projects);
