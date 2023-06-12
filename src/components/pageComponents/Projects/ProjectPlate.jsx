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
    <mesh ref={ref} position={[-3.5, 0.1, 0]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <MeshWobbleMaterial color={"#002520"} />
    </mesh>
  );
};
export default ProjectPlate;
