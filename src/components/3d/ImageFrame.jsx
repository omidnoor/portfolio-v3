import React from "react";
import { useStore } from "@/stores/store";
import { Center, Html, Image, Text3D, useCursor, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { dampC } from "maath/easing";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { memo } from "react";
import { Deep_Blue } from "../utilComponents/variables/colors";
import FrameContent from "./FrameContent";
import FrameTitle from "./FrameTitle";
import TitlePlate from "./TitlePlate";


const GOLDENRATIO = 1.61803398875;

const outerScale = [1, GOLDENRATIO, 0.05];
const outerPosition = [0, GOLDENRATIO / 2, 0];
const innerScale = [0.9, 0.93, 0.9];
const innerPosition = [0, 0, 0.2];

const ImageFrame = ({
  setTitle,
  title,
  ...props
}) => {
  const frameRef = useRef(null);

  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const activeFrame = useStore((state) => state.activeFrame);
  const setHoverThree = useStore((state) => state.setHoverThree);
  const hoverThree = useStore((state) => state.hoverThree);
  const hoverHtml = useStore((state) => state.hoverHtml);

  useCursor(hoverThree || hoverHtml);

  const [matcapTexture2] = useMatcapTexture("221917_928380_5F504D_7C746C", 256);

  return (
    <group
      onPointerMissed={() => setActiveFrame({ name: "" })}
      onPointerEnter={()=>setHoverThree(true)}
      onPointerLeave={() => setHoverThree(false)}
    >
      <mesh scale={outerScale} position={outerPosition} {...props}>
        <boxGeometry />
        {/* <meshBasicMaterial
          color={Deep_Blue}
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
          // toneMapped={false}
        /> */}
        <meshMatcapMaterial matcap={matcapTexture2} />
        <mesh
          ref={frameRef}
          // raycast={() => null}
          scale={innerScale}
          position={innerPosition}
        >
          <boxGeometry />
          <meshStandardMaterial fog={false}  transparent/>
          {/* {!isActiveFrame && (
            <Image
              url={props.url}
              raycast={() => null}
              position={[0, 0, 0.7]}
            />
          )} */}
          {true && <FrameContent props={...props}/>}
          <FrameTitle props={...props}/>
          <TitlePlate props={...props} setTitle={setTitle} />
        </mesh>
      </mesh>
    </group>
  );
};
export default memo(ImageFrame);
