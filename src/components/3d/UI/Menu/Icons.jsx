import { RoundedBox } from "@react-three/drei";
import Icon from "./Icon";

const Icons = ({ btnMatcap, position }) => {
  return (
    <group>
      <Icon position={[0.9, 0, 0.03]} />
      <Icon position={[0.5, 0, 0.03]} />
      <Icon position={[0.1, 0, 0.03]} />
      <Icon position={[-0.3, 0, 0.03]} />
    </group>
  );
};
export default Icons;
