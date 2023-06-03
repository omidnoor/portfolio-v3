import { Canvas } from "@react-three/fiber";

const Layout = ({ children }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};
export default Layout;
