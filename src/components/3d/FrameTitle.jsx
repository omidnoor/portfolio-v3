import { Center, Text3D } from "@react-three/drei";
import { Deep_Blue } from "../utilComponents/variables/colors";
import { useStore } from "@/stores/store";

const FrameTitle = (props) => {
  const setHtmlClick = useStore((state) => state.setHtmlClick);
  const setHtmlName = useStore((state) => state.setHtmlName);
  return (
    <mesh
      onClick={() => {
        setHtmlClick((prev) => !prev);
        setHtmlName(props.name);
      }}
    >
      <Center position={[0, 0.6, 0]}>
        <Text3D
          font="/Inter_Bold.json"
          letterSpacing={-0.0}
          size={0.1}
          height={0.1}
        >
          {props.name}
          <meshBasicMaterial toneMapped={false} color={Deep_Blue} />
        </Text3D>
      </Center>
    </mesh>
  );
};
export default FrameTitle;
