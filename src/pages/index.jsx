import Layout from "@/components/3d/Layout";
import ImageFrames from "../components/3d/ImageFrames";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import CustomLoader from "@/components/utilComponents/Loader/CustomLoader";

import { Inter } from "next/font/google";
import { useStore } from "@/stores/store";
import SceneModel from "@/components/3d/Models/SceneModel";

import TargetCamera from "@/components/3d/Utils/TargetCamera";
import Menu from "@/components/3d/UI/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

const pages = [
  {
    name: "Home",
    position: [0, 1, 1],
    rotation: [0, 0, 0],
    url: "http://localhost:3000/PageHome",
  },
  {
    name: "AboutMe",
    position: [-1.45, 1, 0.25],
    rotation: [0, Math.PI * 0.25, 0],
    url: "http://localhost:3000/PageAboutMe",
  },
  {
    name: "ContactMe",
    position: [1.45, 1, 0.25],
    rotation: [0, -Math.PI * 0.25, 0],
    url: "http://localhost:3000/PageContactMe",
  },
  {
    name: "Projects",
    position: [-2.15, 1, 1.5],
    rotation: [0, Math.PI * 0.25, 0],
    url: "http://localhost:3000/PageProjects",
  },
  {
    name: "Testimonials",
    position: [2.15, 1, 1.5],
    rotation: [0, -Math.PI * 0.25, 0],
    url: "http://localhost:3000/PageTestimonials",
  },
];
const HomePage = () => {
  const domContentRef = useRef(null);
  const portal = useStore((state) => state.portal);
  const container = useRef(null);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          cursor: "pointer",
          padding: 0,
        }}
        className={inter.className}
        ref={domContentRef}
      />

      <Layout>
        <Suspense fallback={<CustomLoader />}>
          {/* <OrbitControls /> */}
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ambientLight intensity={0.5} />
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <group position={[0, -0.9, 0]}>
            <SceneModel />
            <Menu />
            <TargetCamera />
            {/* <ImageFrames pages={pages} portal={portal} /> */}
            {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
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
            </mesh> */}
            {/* <Environment preset="city" /> */}
          </group>
          {/* <Welcome position={[0, 3, 0]} /> */}
        </Suspense>
      </Layout>
    </>
  );
};
export default HomePage;
