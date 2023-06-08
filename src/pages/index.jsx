import Layout from "@/components/3d/Layout";
import ImageFrames from "../components/3d/ImageFrames";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Welcome from "@/components/3d/Welcome";
import CustomLoader from "@/components/utilComponents/Loader/CustomLoader";
import { Sand_Color } from "@/components/utilComponents/variables/colors";
import Cursor from "@/components/utilComponents/UI/Cursor";

const pages = [
  {
    name: "Home",
    position: [0, 1, 1],
    rotation: [0, 0, 0],
    url: "https://picsum.photos/200/300?grayscale",
  },
  {
    name: "AboutMe",
    position: [-1.45, 1, 0.25],
    rotation: [0, Math.PI * 0.25, 0],
    url: "https://picsum.photos/id/237/200/300",
  },
  {
    name: "ContactMe",
    position: [1.45, 1, 0.25],
    rotation: [0, -Math.PI * 0.25, 0],
    url: "https://picsum.photos/id/237/200/300",
  },
  {
    name: "Projects",
    position: [-2.15, 1, 1.5],
    rotation: [0, Math.PI * 0.25, 0],
    url: "https://picsum.photos/id/237/200/300",
  },
  {
    name: "Testimonials",
    position: [2.15, 1, 1.5],
    rotation: [0, -Math.PI * 0.25, 0],
    url: "https://picsum.photos/id/237/200/300",
  },
];
const HomePage = () => {
  const domContentRef = useRef(null);
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
        ref={domContentRef}
      />
      <Layout>
        <Suspense fallback={<CustomLoader />}>
          <group position={[0, -0.9, 0]}>
            <Welcome position={[0, 3, 0]} />
            <ImageFrames pages={pages} portal={domContentRef} />
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
                color={Sand_Color}
                metalness={0.6}
              />
            </mesh>
            {/* <Environment preset="city" /> */}
          </group>
        </Suspense>
      </Layout>
      {/* <Cursor /> */}
    </>
  );
};
export default HomePage;
