import { Html, Image } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

// const GOLDENRATIO = process.env.GOLDENRATIO;
// console.log(GOLDENRATIO);

const GOLDENRATIO = 1.61803398875;

const ImageFrame = ({ url, c = new Color(), ...props }) => {
  const name = useRef();
  const imageRef = useRef();
  return (
    <mesh scale={[1, GOLDENRATIO, 0.05]} position={[0, GOLDENRATIO / 2, 0]}>
      <boxGeometry />
      <meshStandardMaterial
        color="#151515"
        metalness={0.5}
        roughness={0.5}
        envMapIntensity={2}
      />
      <mesh
        ref={name}
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
    </mesh>
  );
};
export default ImageFrame;
