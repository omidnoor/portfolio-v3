import { MeshReflectorMaterial } from "@react-three/drei";
import ThreedText from "./ThreedText";
import { Suspense } from "react";
import CustomLoader from "@/components/utilComponents/Loader/CustomLoader";
import Layout from "../Layout";
import {
  Deep_Blue,
  SKY_BLUE,
} from "@/components/utilComponents/variables/colors";
import ContactRect from "./ContactRect";
import * as THREE from "three";

THREE.ColorManagement.enabled = true;

const ContactScene = () => {
  return (
    <Layout>
      <ambientLight intensity={1} />
      <pointLight intensity={1} position={[10, 10, 0]} />
      <fog attach="fog" args={[Deep_Blue, 0, 55]} />
      <Suspense fallback={<CustomLoader />}>
        <group position={[0, -0.9, 0]}>
          <ThreedText />
          <ContactRect />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[100, 100]} />
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
        </group>
      </Suspense>
    </Layout>
  );
};
export default ContactScene;
