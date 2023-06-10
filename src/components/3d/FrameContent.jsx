import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

import styles from "./content-embed.module.scss";
import { Html, useCursor } from "@react-three/drei";
import { useStore } from "@/stores/store";
import { Deep_Blue } from "../utilComponents/variables/colors";

const componentMapping = {
  Home: React.lazy(() => import("../pageComponents/home/Home")),
  AboutMe: React.lazy(() => import("../pageComponents/aboutMe/AboutMe")),
  ContactMe: React.lazy(() => import("../pageComponents/contactMe/ContactMe")),
};

const FrameContent = ({ props }) => {
  const [isActiveFrame, setIsActiveFrame] = useState(false);

  const activeFrame = useStore((state) => state.activeFrame);
  const portal = useStore((state) => state.portal);
  const setHtmlName = useStore((state) => state.setHtmlName);
  const htmlName = useStore((state) => state.htmlName);
  const setHtmlClicked = useStore((state) => state.setHtmlClicked);
  const setHoverHtml = useStore((state) => state.setHoverHtml);

  const ComponentToRender = componentMapping[props.name];

  const transitions = useTransition(isActiveFrame, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { tension: 10, friction: 10 },
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
              onClick={(event) => {
                event.stopPropagation();
                setHtmlName(activeFrame.name);
              }}
              onMouseEnter={() => {
                setHoverHtml(true);
              }}
              onMouseLeave={() => {
                setHoverHtml(false);
              }}
              style={{
                ...style,
                width: "370px",
                height: "617px",
                padding: 0,
                margin: 0,
                backgroundColor: Deep_Blue,
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
