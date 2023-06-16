import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

import styles from "./content-embed.module.scss";
import { Html } from "@react-three/drei";
import { useStore } from "@/stores/store";
import { Deep_Blue } from "../utilComponents/variables/colors";

const componentMapping = {
  Home: React.lazy(() => import("../pageComponents/home/Home")),
  AboutMe: React.lazy(() => import("../pageComponents/aboutMe/AboutMe")),
  ContactMe: React.lazy(() => import("../pageComponents/contactMe/ContactMe")),
  Projects: React.lazy(() => import("../pageComponents/Projects/Projects")),
};

const FrameContent = ({ props }) => {
  const [isActiveFrame, setIsActiveFrame] = useState(false);

  const activeFrame = useStore((state) => state.activeFrame);
  const portal = useStore((state) => state.portal);
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
    <mesh>
      <Html scale={0.1} wrapperClass={styles.wrapper} transform sprite>
        
        {transitions((style, item) =>
          item ? (
            <React.Suspense fallback={<div>Loading...</div>}>
              <animated.div
                className={styles.main}
                name={props.name}
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
                  overflow: "hidden",
                  backgroundColor: Deep_Blue,
                }}
              >
                
                {ComponentToRender && <ComponentToRender />}
              </animated.div>
            </React.Suspense>
          ) : null,
        )}
        {/* {!isActiveFrame && <Image src={props.url} fill alt="image" />} */}
      </Html>
    </mesh>
  );
};
export default FrameContent;
