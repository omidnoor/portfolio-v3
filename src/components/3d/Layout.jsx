import { useThree, Canvas, extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { PerspectiveCamera } from "three";
import ImageFrames from "./ImageFrames";
import { OrbitControls } from "@react-three/drei";

extend({ PerspectiveCamera });

export const Camera = (props) => {
  const cameraRef = useRef(null);
  const { setDefaultCamera, size } = useThree();

  // Make the camera known to the system
  // useEffect(() => {
  //   void setDefaultCamera(cameraRef.current);
  // }, []);

  // update camera every frame

  return (
    <perspectiveCamera
      ref={cameraRef}
      aspect={size.width / size.height}
      {...props}
    />
  );
};

const Layout = ({ children }) => {
  return (
    <Canvas dpr={[1, 1.5]}>
      {/* <OrbitControls /> */}
      {/* <Camera fov={70} position={[0, 2, 10]} /> */}
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};
export default Layout;
