import FrameButton from "@/components/utilComponents/UI/frameButton/FrameButton";
import {
  Bright_Pink,
  Deep_Blue,
  SKY_BLUE,
} from "@/components/utilComponents/variables/colors";
import { useStore } from "@/stores/store";
import { PivotControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

THREE.ColorManagement.enabled = true;

const ProjectPlate = ({ position, rotation, props }) => {
  const [aspect, setAspect] = useState(window.innerWidth / window.innerHeight);
  const ref = useRef();

  const GOLDENRATIO = useStore((state) => state.GOLDENRATIO);

  // const {
  //   positionX,
  //   positionY,
  //   positionZ,
  //   positionRX,
  //   positionRY,
  //   positionRZ,
  // } = useControls({
  //   positionX: {
  //     value: 0,
  //     min: -20,
  //     max: 20,
  //     step: 0.001,
  //   },
  //   positionY: {
  //     value: 1,
  //     min: -20,
  //     max: 20,
  //     step: 0.001,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -20,
  //     max: 20,
  //     step: 0.001,
  //   },
  //   positionRX: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.001,
  //   },
  //   positionRY: {
  //     value: Math.PI / 4,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.001,
  //   },
  //   positionRZ: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.001,
  //   },
  // });

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
    <group>
      <mesh
        ref={ref}
        position={position}
        rotation={rotation}
        onPointerEnter={() => {}}
      >
        <planeGeometry args={[1 * GOLDENRATIO, 1]} />
        <meshStandardMaterial color={"#ffefff"} />
      </mesh>
      <FrameButton
        position={[-2.15, -0.5, 1.5]}
        rotation={[0, Math.PI * 0.25, 0]}
      />
    </group>
  );
};
export default ProjectPlate;
