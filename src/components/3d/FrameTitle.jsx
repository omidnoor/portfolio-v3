import { Center, Text3D } from "@react-three/drei";
import { Sand_Color } from "../utilComponents/variables/colors";

const FrameTitle = ({ props }) => {
  return (
    <mesh>
      <Center position={[0, 0.65, 0]}>
        <Text3D
          font="/inter_Bold.json"
          letterSpacing={-0.0}
          size={0.1}
          height={0.1}
        >
          {props.name}
          <meshBasicMaterial toneMapped={false} color={Sand_Color} />
        </Text3D>
      </Center>
    </mesh>
  );
};
export default FrameTitle;
