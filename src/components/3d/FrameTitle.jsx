import { Center, Text3D } from "@react-three/drei";
import { Deep_Blue } from "../utilComponents/variables/colors";
import { useStore } from "@/stores/store";

const FrameTitle = ({ props }) => {
  const setHtmlClicked = useStore((state) => state.setHtmlClicked);
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const activeFrame = useStore((state) => state.activeFrame);
  // const setHtmlName = useStore((state) => state.setHtmlName);
  // console.log(activeFrame);
  return (
    <mesh
      onClick={() => {
        // setHtmlClicked((prev) => !prev);
        // setHtmlName(props.name);
        setActiveFrame({ name: props.name });
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
