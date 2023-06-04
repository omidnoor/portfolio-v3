import { useThree, Canvas, extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { PerspectiveCamera } from "three";
import ImageFrames from "./ImageFrames";
import { OrbitControls } from "@react-three/drei";

extend({ PerspectiveCamera });

const Layout = ({ children }) => {
  return (
    <Canvas dpr={[1, 1.5]}>
      {/* <OrbitControls /> */}
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};
export default Layout;
