import Home from "@/components/pageComponents/Home";
import { useStore } from "@/stores/store";
import { Html, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { damp3, dampC, dampQ } from "maath/easing";
import { useRef, useState } from "react";
import { Color } from "three";

import { CustomMesh } from "./CustomMesh";
import { useEffect } from "react";

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
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [nameUuid, setNameUuid] = useState(name);
  const frameRef = useRef();

  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const setFrameEventName = useStore((state) => state.setFrameEventName);
  const activeFrame = useStore((state) => state.activeFrame);

  useEffect(() => {
    setNameUuid(frameRef.current?.uuid);
  }, []);
  useFrame((state, delta) => {
    if (!frameRef.current) return;
    // console.log(frameRef.current);
    dampC(
      frameRef.current?.material?.color,
      hovered ? [1, 0.647, 0] : [1, 1, 1],
      0.1,
      delta,
    );
  });

  const handleClick = (event) => {
    // event.stopPropagation();
    setClicked(true);
    if (event.object) {
      const frameName = event.object.name;
      setActiveFrame(frameName);
      setFrameEventName(frameName);
    }
  };

  useCursor(hovered);

  return (
    <group
      // ref={frameRef}
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
        onClick={handleClick}
        scale={outerScale}
        position={outerPosition}
        name={nameUuid}
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
          <Html className="content-embed" portal={portal} scale={0.1} transform>
            <Home onHover={setHovered} setClicked={setClicked} />
          </Html>
        </mesh>
      </mesh>
    </group>
  );
};
export default ImageFrame;
