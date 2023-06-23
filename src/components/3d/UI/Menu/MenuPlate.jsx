import {
  MeshReflectorMaterial,
  RoundedBox,
  useMatcapTexture,
} from "@react-three/drei";
import Icons from "./Icons";

const MenuPlate = () => {
  const [matcap, url] = useMatcapTexture("6C6F76_CBD1D7_B2BDC7_A6B0BF");
  const [btnMatcap, btnUrl] = useMatcapTexture("BA8979_DDCBCA_9A4726_892407");
  return (
    <RoundedBox
      args={[2.5, 0.35, 0.05]}
      radius={0.01}
      smoothness={1}
      creaseAngle={0.1}
    >
      <meshMatcapMaterial matcap={matcap} />
      {/* <MeshReflectorMaterial /> */}
      <Icons position={[0.9, 0, 0.03]} btnMatcap={btnMatcap} />
      {/* <Icons position={[0.5, 0, 0.03]} btnMatcap={btnMatcap} />
      <Icons position={[0.1, 0, 0.03]} btnMatcap={btnMatcap} />
      <Icons position={[-0.3, 0, 0.03]} btnMatcap={btnMatcap} /> */}
    </RoundedBox>
  );
};
export default MenuPlate;
