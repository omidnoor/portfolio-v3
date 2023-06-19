import {
  Center,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import ThreedText from "./ThreedText";
import { Suspense } from "react";
import CustomLoader from "@/components/utilComponents/Loader/CustomLoader";
import ContactFields from "./ContactFields";
import Layout from "../Layout";
import { SKY_BLUE } from "@/components/utilComponents/variables/colors";
import ContactRect from "./ContactRect";
import * as THREE from "three";

THREE.ColorManagement.enabled = true;

const ContactScene = () => {
  return (
    <Layout>
      <ambientLight intensity={1} />
      <pointLight intensity={1} position={[10, 10, 0]} />
      <Suspense fallback={<CustomLoader />}>
        <group position={[0, -0.9, 0]}>
          <ThreedText />
          <ContactRect />
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
        </group>
      </Suspense>
    </Layout>
  );
};
export default ContactScene;
