import { RoundedBox } from "@react-three/drei";

const Icon = ({ position }) => {
  return (
    <mesh position={position}>
      <RoundedBox
        args={[0.2, 0.2, 0.05]}
        radius={0.01}
        smoothness={1}
        creaseAngle={0.1}
      >
        <meshStandardMaterial roughness={0} metalness={0.4} color={"#5cceee"} />
      </RoundedBox>
    </mesh>
  );
};
export default Icon;
