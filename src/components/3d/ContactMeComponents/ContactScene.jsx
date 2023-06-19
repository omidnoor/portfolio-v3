import {
  Center,
  OrbitControls,
  PerspectiveCamera,
  Text,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { MeshMatcapMaterial } from "three";
import ThreedText from "./ThreedText";
import ContactFields from "./ContactFields";
import { Suspense } from "react";
import CustomLoader from "@/components/utilComponents/Loader/CustomLoader";

const ContactScene = () => {
  return (
    <Canvas>
      <OrbitControls />
      {/* <fog attach="fog" args={["red", 0, 15]} /> */}
      <color attach="background" args={["#fff0cc"]} />
      <ambientLight intensity={1000} />
      {/* <pointLight position={[10, 100, 0]} intensity={1000} /> */}
      <PerspectiveCamera position={[0, 0, -8]}>
        <Suspense fallback={<CustomLoader />}>
          <Center>
            <ThreedText />
            <ContactFields />
          </Center>
        </Suspense>
      </PerspectiveCamera>
    </Canvas>
  );
};
export default ContactScene;
