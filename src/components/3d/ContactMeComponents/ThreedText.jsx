import {
  Center,
  PresentationControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { SRGBColorSpace } from "three";

const ThreedText = () => {
  const [matcapTexture] = useMatcapTexture("442C27_A79E90_847066_8D837C", 256);

  return (
    // <PresentationControls
    //   touchAction={false}
    //   global={true}
    //   cursor={true}
    //   snap={true}
    //   speed={1}
    //   zoom={1}
    //   rotation={[0, 0, 0]}
    //   config={{ mass: 1, tension: 170, friction: 10 }}
    // >
    <Center position={[0, 5, -10]} rotation={[Math.PI / 8, 0, 0]}>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
        font="/inter_Bold.json"
      >
        LET'S TALK
        {/* <meshNormalMaterial /> */}
        <meshMatcapMaterial matcap={matcapTexture} toneMapped={false} />
      </Text3D>
    </Center>
    // </PresentationControls>
  );
};
export default ThreedText;
