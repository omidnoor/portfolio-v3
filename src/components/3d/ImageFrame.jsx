import { useStore } from "@/stores/store";
import { Html, Image, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { damp3, dampC } from "maath/easing";
import { useRef, useState } from "react";
import { Color } from "three";
import getUuidByString from "uuid-by-string";
import { useRoute } from "wouter";

// const GOLDENRATIO = process.env.GOLDENRATIO;
// console.log(GOLDENRATIO);

const GOLDENRATIO = 1.61803398875;

const ImageFrame = ({ url, c = new Color(), ...props }) => {
  const nameRef = useRef();
  const imageRef = useRef();
  const frameRef = useRef();

  // const activePage = useStore((state) => state.pages[pageName]);
  // const activeFrame = useStore((state) => state.activeFrame);
  // const setActiveFrame = useStore((state) => state.setActiveFrame);

  const [hovered, setHovered] = useState(false);
  const [rnd] = useState(() => Math.random());

  const name = getUuidByString(url);
  const [_, params] = useRoute("/item/:id");
  const isActive = params?.id === name;
  useCursor(hovered);

  useFrame((state, delta) => {
    imageRef.current.material.zoom =
      1 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) * 0.1;
    damp3(
      imageRef.current.scale,
      [0.85 * (hovered ? 0.85 : 1), 0.9 * (hovered ? 0.905 : 1), 1],
      0.1,
      delta,
    );
    if (frameRef.current) {
      dampC(
        frameRef.current.material.color,
        hovered ? [1, 0.647, 0] : [1, 1, 1],
        0.1,
        delta,
      );
    }
  });

  return (
    <group {...props}>
      <mesh
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
        name={name}
        onPointerOver={(e) => {
          // e.stopPropagation();

          setHovered(true);
        }}
        onPointerOut={(e) => {
          setHovered(false);
        }}
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
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={imageRef}
          position={[0, 0, 0.7]}
          url={url}
        />
        <Text
          maxWidth={0.1}
          anchorX="left"
          anchorY="top"
          position={[0, GOLDENRATIO * 0.4, 0]}
          fontSize={0.025}
        >
          {name.split("-").join(" ")}
        </Text>
      </mesh>
    </group>
  );
};
export default ImageFrame;
