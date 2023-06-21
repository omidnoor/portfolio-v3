import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import Layout from "../Layout";
import TestFlag from "./TestFlag";
import {
  Deep_Blue,
  SKY_BLUE,
} from "@/components/utilComponents/variables/colors";

const TestScene = () => {
  return (
    <Layout>
      <OrbitControls />
      <fog attach="fog" args={[Deep_Blue, 0, 30]} />
      <pointLight position={[10, 10, 10]} intensity={10} />
      <TestFlag />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={15}
          mixStrength={2}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.2}
          maxDepthThreshold={1.4}
          color={SKY_BLUE}
          metalness={0.6}
        />
      </mesh>
    </Layout>
  );
};
export default TestScene;
