import Layout from "@/components/3d/Layout";
import ImageFrames from "../components/3d/ImageFrames";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";

const HomePage = () => {
  const images = [
    {
      url: "https://picsum.photos/200/300?grayscale",
    },
    {
      url: "https://picsum.photos/id/237/200/300",
    },
  ];
  return (
    <Layout>
      <group position={[0, -0.5, 0]}>
        <ImageFrames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
        <Environment preset="forest" />
      </group>
    </Layout>
  );
};
export default HomePage;
