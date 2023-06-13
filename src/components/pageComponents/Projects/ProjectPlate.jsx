import {
  Bright_Pink,
  Deep_Blue,
  SKY_BLUE,
} from "@/components/utilComponents/variables/colors";
import { PivotControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

THREE.ColorManagement.enabled = true;

const ProjectPlate = () => {
  const [aspect, setAspect] = useState(window.innerWidth / window.innerHeight);
  const ref = useRef();

  const {
    positionX,
    positionY,
    positionZ,
    positionRX,
    positionRY,
    positionRZ,
  } = useControls({
    positionX: {
      value: 0,
      min: -20,
      max: 20,
      step: 0.001,
    },
    positionY: {
      value: 1,
      min: -20,
      max: 20,
      step: 0.001,
    },
    positionZ: {
      value: 0,
      min: -20,
      max: 20,
      step: 0.001,
    },
    positionRX: {
      value: 0,
      min: -Math.PI,
      max: Math.PI,
      step: 0.001,
    },
    positionRY: {
      value: Math.PI / 4,
      min: -Math.PI,
      max: Math.PI,
      step: 0.001,
    },
    positionRZ: {
      value: 0,
      min: -Math.PI,
      max: Math.PI,
      step: 0.001,
    },
  });

  useFrame(() => {
    // ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
    // ref.current.rotation.z += 0.01;
    // ref.current.position.x += 0.001;
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setAspect(window.innerWidth / window.innerHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setAspect(window.innerWidth / window.innerHeight);
      });
    };
  }, [window.innerWidth, window.innerHeight]);

  return (
    <mesh
      ref={ref}
      position={[positionX, positionY, positionZ]}
      rotation={[positionRX, positionRY, positionRZ]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={SKY_BLUE} />
    </mesh>
  );
};
export default ProjectPlate;
