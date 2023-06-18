import AboutCloud from "@/components/3d/AboutMeComponents/AboutCloud";
import AboutLayout from "@/components/3d/AboutMeComponents/AboutLayout";
import AboutSphere from "@/components/3d/AboutMeComponents/AboutSphere";
import AboutWord from "@/components/3d/AboutMeComponents/AboutWord";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const AboutMe = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 100]} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <AboutCloud count={5} radius={40} />
      <AboutSphere />
      <TrackballControls />
    </Canvas>
  );
};
export default AboutMe;
