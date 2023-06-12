import {
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  RenderTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ProjectPlate = () => {
  const ref = useRef();
  useFrame(() => {
    // ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
    // ref.current.rotation.z += 0.01;
    // ref.current.position.x += 0.001;
  });
  return (
    <mesh ref={ref}>
      <planeGeometry args={[0.3, 0.3]} />
      <MeshWobbleMaterial color={"#9ffff0"} />
    </mesh>
  );
};
export default ProjectPlate;
