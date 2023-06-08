import { useStore } from "@/stores/store";
import { Center, Html, Image, Text3D, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { dampC } from "maath/easing";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";

import Home from "@/components/pageComponents/home/Home";
import AboutMe from "../pageComponents/aboutMe/AboutMe";
import { memo } from "react";
import { Deep_Blue } from "../utilComponents/variables/colors";
// import { useTransition, animated } from "react-spring";

const componentMapping = {
  Home: Home,
  AboutMe: AboutMe,
};

const GOLDENRATIO = 1.61803398875;

const outerScale = [1, GOLDENRATIO, 0.05];
const outerPosition = [0, GOLDENRATIO / 2, 0];
const innerScale = [0.9, 0.93, 0.9];
const innerPosition = [0, 0, 0.2];

const ImageFrame = ({
  c = new Color(),
  portal,
  setClicked,
  targetPosition,
  targetQuaternion,
  activeFrame,
  setActiveFrame,
  handleClick,
  transparentFrameRef,
  setHtmlClick,
  setHtmlName,
  pagesName,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [isActiveFrame, setIsActiveFrame] = useState(false);
  const frameRef = useRef(null);

  const setFrameEventName = useStore((state) => state.setFrameEventName);
  const ComponentToRender = componentMapping[props.name];

  useFrame((state, delta) => {
    if (!frameRef.current) return;
    dampC(
      frameRef.current?.material?.color,
      hovered ? [1, 0.8, 0.9] : [1, 1, 1],
      0.1,
      delta,
    );
  });
  console.log();
  useEffect(() => {
    if (activeFrame.name === props.name) {
      setIsActiveFrame(true);
    } else {
      setIsActiveFrame(false);
    }
  }, [activeFrame]);

  // const transitions = useTransition(isActiveFrame, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   // leave: { opacity: 0 },
  //   config: { tension: 100, friction: 50 },
  // });

  useCursor(hovered);

  return (
    <group
      onPointerOver={(event) => {
        setFrameEventName(event.object.name);
        setHovered(true);
      }}
      onPointerOut={(e) => {
        setHovered(false);
      }}
      onPointerMissed={() => setActiveFrame({ name: "" })}
    >
      <mesh scale={outerScale} position={outerPosition} {...props}>
        <boxGeometry />
        <meshBasicMaterial
          color={Deep_Blue}
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
          // toneMapped={false}
        />
        <mesh
          ref={frameRef}
          raycast={() => null}
          scale={innerScale}
          position={innerPosition}
        >
          <boxGeometry />
          <meshBasicMaterial fog={false} />
          {/* {!isActiveFrame && (
            <Image
              url={props.url}
              raycast={() => null}
              position={[0, 0, 0.7]}
            />
          )} */}
          {true && (
            <Html
              // style={contentStyle}
              className="content-embed"
              style={{
                width: "100%",
                height: "100%",
                padding: 0,
                margin: 0,
                backgroundColor: Deep_Blue,
              }}
              portal={portal}
              scale={0.1}
              transform
              sprite
            >
              {/* {transitions((style, item) => ( */}
              {/* <animated.div */}
              <div
                className="wrapper"
                // onPointerDown={(e) => e.stopPropagation()}
                name={props.name}
                onClick={() => {
                  setHtmlClick((prev) => !prev);
                  setHtmlName(props.name);
                }}
                style={{
                  // ...style,
                  width: "100%",
                  height: "100%",
                  padding: 0,
                  margin: 0,
                }}
              >
                {ComponentToRender && (
                  <ComponentToRender
                    onHover={setHovered}
                    setClicked={setClicked}
                    frameRef={frameRef}
                  />
                )}
              </div>
              {/* </animated.div> */}
              {/* ))} */}
              {/* {!isActiveFrame && <Image src={props.url} fill alt="image" />} */}
            </Html>
          )}
        </mesh>
        <mesh
          onClick={() => {
            setHtmlClick((prev) => !prev);
            setHtmlName(props.name);
          }}
        >
          <Center position={[0, 0.6, 0]}>
            <Text3D
              font="/Inter_Bold.json"
              letterSpacing={-0.0}
              size={0.1}
              height={0.1}
            >
              {props.name}
              <meshBasicMaterial toneMapped={false} color={Deep_Blue} />
            </Text3D>
          </Center>
        </mesh>
      </mesh>
    </group>
  );
};
export default memo(ImageFrame);
