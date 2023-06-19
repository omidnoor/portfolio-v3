import { Canvas } from "@react-three/fiber";
import { Deep_Blue, SKY_BLUE } from "../utilComponents/variables/colors";

const Layout = ({ children }) => {
  return (
    <Canvas dpr={[1, 1.5]}>
      <color attach="background" args={[Deep_Blue]} />
      <fog attach="fog" args={[Deep_Blue, 0, 15]} />
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />

      {children}
    </Canvas>
  );
};
export default Layout;
