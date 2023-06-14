import { Canvas } from "@react-three/fiber";
import { SKY_BLUE } from "../utilComponents/variables/colors";

const Layout = ({ children }) => {
  return (
    <Canvas dpr={[1, 1.5]}>
      <color attach="background" args={[SKY_BLUE]} />
      <fog attach="fog" args={[SKY_BLUE, 0, 15]} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      {children}
    </Canvas>
  );
};
export default Layout;
