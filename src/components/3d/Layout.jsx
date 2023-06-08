import { Canvas, extend } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { SKY_BLUE } from "../utilComponents/variables/colors";

extend({ PerspectiveCamera });

const Layout = ({ children }) => {
  return (
    <Canvas dpr={[1, 1.5]}>
      {/* <OrbitControls /> */}
      <color attach="background" args={[SKY_BLUE]} />
      <fog attach="fog" args={[SKY_BLUE, 0, 15]} />
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};
export default Layout;

// #191920
