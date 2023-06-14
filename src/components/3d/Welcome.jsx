import { Center, Float, Text3D, useMatcapTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Effect from "../effect/Effect";
import { Dark_Purple } from "../utilComponents/variables/colors";
import { useEffect } from "react";
import * as THREE from "three";

const Welcome = ({ position, margin = 0.5 }) => {
  const { width, height } = useThree((state) => state.viewport);

  const [matcapTexture1] = useMatcapTexture("191514_6D5145_4E3324_3B564D", 256);
  const [matcapTexture2] = useMatcapTexture("191514_6D5145_4E3324_3B564D", 256);
  useEffect(() => {
    // matcapTexture1.colorSpace = THREE.SRGBColorSpace;
    // matcapTexture2.colorSpace = THREE.SRGBColorSpace;
  }),
    [];
  return (
    <group>
      <Center position={[0, 3.7, 0]}>
        <Float
          rotationIntensity={0.3}
          floatIntensity={0.1}
          floatingRange={[-0.1, 0.1]}
        >
          <Text3D
            font="/inter_Bold.json"
            letterSpacing={0.02}
            size={Math.max(width * 0.02, 0.2)}
            height={0.09}
          >
            Hi, Welcome to my portfolio
            <meshMatcapMaterial matcap={matcapTexture2} toneMapped={false} />
            {/* <meshStandardMaterial color={Dark_Purple} /> */}
          </Text3D>
        </Float>
      </Center>
      <Center position={[0, 3.0, 0]}>
        <Float
          rotationIntensity={0.3}
          floatIntensity={0.1}
          floatingRange={[-0.1, 0.1]}
        >
          <Text3D
            font="/inter_Bold.json"
            letterSpacing={0.02}
            size={Math.max(width * 0.02, 0.2)}
            height={0.09}
          >
            My name is Omid Noorshams
            <meshMatcapMaterial matcap={matcapTexture2} toneMapped={false} />
            {/* <meshStandardMaterial color={Dark_Purple} /> */}
          </Text3D>
        </Float>
      </Center>
      <Center position={[0, 2.3, 0]}>
        <Float
          rotationIntensity={0.3}
          floatIntensity={0.1}
          floatingRange={[-0.1, 0.1]}
        >
          <Text3D
            font="/inter_Bold.json"
            letterSpacing={0.02}
            size={Math.max(width * 0.02, 0.2)}
            height={0.09}
          >
            Creative Web Developer & Designer
            <meshMatcapMaterial matcap={matcapTexture1} toneMapped={false} />
            {/* <meshStandardMaterial color={Dark_Purple} /> */}
          </Text3D>
        </Float>
      </Center>
      {/* <Effect /> */}
    </group>
  );
};
export default Welcome;
