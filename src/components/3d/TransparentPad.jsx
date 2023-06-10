import { useCursor } from "@react-three/drei";

const TransparentPad = ({ hovered, setHovered }) => {
  useCursor(hovered);
  return (
    <mesh
      position={[0, 0, 1]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="red" transparent />
    </mesh>
  );
};
export default TransparentPad;
