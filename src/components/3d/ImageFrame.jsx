import { useStore } from "@/stores/store";
import { Html, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { damp3, dampC, dampQ } from "maath/easing";
import { useRef, useState } from "react";
import { Color } from "three";

import Home from "@/components/pageComponents/Home";
import AboutMe from "../pageComponents/AboutMe";
import { useEffect } from "react";

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
  setNameUuid,
  nameUuid,
  handleClick,
  transparentFrameRef,
  setHtmlClick,
  setHtmlName,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef(null);

  const setFrameEventName = useStore((state) => state.setFrameEventName);
  const ComponentToRender = componentMapping[props.name];

  useFrame((state, delta) => {
    if (!frameRef.current) return;
    dampC(
      frameRef.current?.material?.color,
      hovered ? [1, 0.647, 0] : [1, 1, 1],
      0.1,
      delta,
    );
  });

  // useEffect(() => {
  //   console.log(transparentFrameRef.current, activeFrame);
  // }, [hovered]);

  const isActive = activeFrame?.uuid === nameUuid;
  const contentStyle = isActive ? {} : { display: "none" };

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
      onPointerMissed={() => setActiveFrame(null)}
    >
      <mesh
        scale={outerScale}
        position={outerPosition}
        // name={nameUuid}
        {...props}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frameRef}
          raycast={() => null}
          scale={innerScale}
          position={innerPosition}
        >
          <boxGeometry />
          <meshBasicMaterial fog={false} toneMapped={false} />
          <Html
            // style={contentStyle}
            className="content-embed"
            portal={portal}
            scale={0.1}
            transform
          >
            <div
              className="wrapper"
              // onPointerDown={(e) => e.stopPropagation()}
              name={props.name}
              onClick={() => {
                setHtmlClick((prev) => !prev);
                setHtmlName(props.name);
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
          </Html>
          <mesh ref={transparentFrameRef}>
            <boxGeometry scale={[1, GOLDENRATIO, 0.05]} />
            <meshBasicMaterial color="#ffffff" transparent={true} opacity={0} />
          </mesh>
        </mesh>
      </mesh>
    </group>
  );
};
export default ImageFrame;
