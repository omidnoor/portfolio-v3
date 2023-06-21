import { SKY_BLUE } from "@/components/utilComponents/variables/colors";
import { MeshReflectorMaterial } from "@react-three/drei";

const FlagRod = () => {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 10, 32]} />
        <MeshReflectorMaterial
          blur={[0, 0]}
          resolution={256}
          mixBlur={0}
          mixStrength={2}
          roughness={0}
          depthScale={1.2}
          minDepthThreshold={0.2}
          maxDepthThreshold={1.4}
          color={"#f9f9f9"}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
};
export default FlagRod;
