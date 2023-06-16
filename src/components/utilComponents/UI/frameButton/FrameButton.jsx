import { useStore } from "@/stores/store";

const FrameButton = ({ position, rotation }) => {
  const GOLDENRATIO = useStore((state) => state.GOLDENRATIO);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.15 * GOLDENRATIO, 0.15]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};
export default FrameButton;
