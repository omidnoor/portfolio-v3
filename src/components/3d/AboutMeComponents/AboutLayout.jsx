import { Deep_Blue } from "@/components/utilComponents/variables/colors";
import { Canvas } from "@react-three/fiber";

const AboutLayout = ({ children }) => {
  return (
    <Canvas dpr={[1, 1.5]}>
      <color attach="background" args={[Deep_Blue]} />
      <fog attach="fog" args={[Deep_Blue, 0, 15]} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};
export default AboutLayout;
