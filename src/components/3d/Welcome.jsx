import { Float, Text3D } from "@react-three/drei";

const Welcome = ({ position }) => {
  return (
    <mesh position={position}>
      <Float>
        <Text3D>Hi, Welcome to my portfolio</Text3D>
      </Float>
    </mesh>
  );
};
export default Welcome;
