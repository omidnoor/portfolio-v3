import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

import styles from "./content-embed.module.scss";
import { Html } from "@react-three/drei";
import { useStore } from "@/stores/store";
import { Deep_Blue } from "../utilComponents/variables/colors";

const componentMapping = {
  Home: React.lazy(() => import("../pageComponents/home/Home")),
  AboutMe: React.lazy(() => import("../pageComponents/aboutMe/AboutMe")),
};

const FrameContent = ({ props, frameRef }) => {
  const [isActiveFrame, setIsActiveFrame] = useState(false);
  const activeFrame = useStore((state) => state.activeFrame);
  const portal = useStore((state) => state.portal);
  const setHtmlName = useStore((state) => state.setHtmlName);

  const ComponentToRender = componentMapping[props.name];
  const transitions = useTransition(isActiveFrame, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { tension: 200, friction: 200 },
  });

  useEffect(() => {
    if (activeFrame.name === props.name) {
      setIsActiveFrame(true);
    } else {
      setIsActiveFrame(false);
    }
  }, [activeFrame]);

  return (
    <Html portal={portal} scale={0.1} transform sprite>
      {transitions((style, item) =>
        item ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            <animated.div
              // <div
              className={styles.main}
              // onPointerDown={(e) => e.stopPropagation()}
              name={props.name}
              onClick={() => {
                setHtmlClick((prev) => !prev);
                setHtmlName(props.name);
              }}
              style={{
                ...style,
                width: "522px",
                height: "615px",
                padding: 0,
                margin: 0,
                backgroundColor: Deep_Blue,
                transform: "rotateZ(-45deg)",
                transform: "rotateY(-45deg)",
              }}
            >
              {ComponentToRender && <ComponentToRender />}
              {/* </div> */}
            </animated.div>
          </React.Suspense>
        ) : null,
      )}
      {/* {!isActiveFrame && <Image src={props.url} fill alt="image" />} */}
    </Html>
  );
};
export default FrameContent;
