import { Center, Float, Text3D, useMatcapTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Effect from "../effect/Effect";

const Welcome = ({ position, margin = 0.5 }) => {
  const { width, height } = useThree((state) => state.viewport);

  const [matcapTexture1] = useMatcapTexture("605352_E9CCC5_C7A8A3_A89291", 256);
  const [matcapTexture2] = useMatcapTexture("CBCBCB_595959_8C8C8C_747474", 256);

  return (
    <group>
      <Center position={[0, 5.5, -2]}>
        <Float
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.25, 0.25]}
        >
          <Text3D
            font="/Inter_Bold.json"
            letterSpacing={-0.0}
            size={Math.max(width * 0.015, 0.2)}
            height={0.09}
          >
            Hi, Welcome to my portfolio
            <meshMatcapMaterial matcap={matcapTexture2} />
          </Text3D>
        </Float>
      </Center>
      <Center position={[0, 4.1, -1]}>
        <Float
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.25, 0.25]}
        >
          <Text3D
            font="/Inter_Bold.json"
            letterSpacing={-0.0}
            size={Math.max(width * 0.015, 0.2)}
            height={0.09}
          >
            My name is Omid Noorshams
            <meshMatcapMaterial matcap={matcapTexture2} />
          </Text3D>
        </Float>
      </Center>
      <Center position={[0, 3, 0]}>
        <Float
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.25, 0.25]}
        >
          <Text3D
            font="/Inter_Bold.json"
            letterSpacing={-0.0}
            size={Math.max(width * 0.015, 0.2)}
            height={0.09}
          >
            Creative Web developer and designer
            <meshMatcapMaterial matcap={matcapTexture1} toneMapped={false} />
          </Text3D>
        </Float>
      </Center>
      <Effect />
    </group>
  );
};
export default Welcome;
