import React from "react";
import { useStore } from "@/stores/store";
import { Center, Html, Image, Text3D, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { dampC } from "maath/easing";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { memo } from "react";
import { Deep_Blue } from "../utilComponents/variables/colors";
import FrameContent from "./FrameContent";
import FrameTitle from "./FrameTitle";


const GOLDENRATIO = 1.61803398875;

const outerScale = [1, GOLDENRATIO, 0.05];
const outerPosition = [0, GOLDENRATIO / 2, 0];
const innerScale = [0.9, 0.93, 0.9];
const innerPosition = [0, 0, 0.2];

const ImageFrame = ({
  c = new Color(),
  targetPosition,
  setActiveFrame,
  handleClick,
  setHtmlClick,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [isActiveFrame, setIsActiveFrame] = useState(false);

  const frameRef = useRef(null);

  const setFrameEventName = useStore((state) => state.setFrameEventName);
  const setHtmlName = useStore((state) => state.setHtmlName);

  useFrame((state, delta) => {
    if (!frameRef.current) return;
    dampC(
      frameRef.current?.material?.color,
      hovered ? [1, 0.8, 0.9] : [1, 1, 1],
      0.1,
      delta,
    );
  });


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
          <meshStandardMaterial fog={false} />
          {/* {!isActiveFrame && (
            <Image
              url={props.url}
              raycast={() => null}
              position={[0, 0, 0.7]}
            />
          )} */}
          {true && <FrameContent props={...props} frameRef={frameRef} />}
        </mesh>
        <FrameTitle />
      </mesh>
    </group>
  );
};
export default memo(ImageFrame);
