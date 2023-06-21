import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";

const Flag = () => {
  return (
    <group>
      <mesh position={[0, 3.75, 0]}>
        <planeGeometry args={[4, 2.5, 64, 64]} />
        <MeshWobbleMaterial speed={0.7} factor={1} />
      </mesh>
    </group>
  );
};
export default Flag;
