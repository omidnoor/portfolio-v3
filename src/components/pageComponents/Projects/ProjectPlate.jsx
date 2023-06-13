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
    <mesh ref={ref} position={[-3.65, 0.1, 0]} rotation={[0, -Math.PI / 4, 0]}>
      <boxGeometry args={[0.01, 0.3, 0.3]} />
      <MeshWobbleMaterial color={"#002520"} />
    </mesh>
  );
};
export default ProjectPlate;
