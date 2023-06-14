import { useMatcapTexture } from "@react-three/drei";

const TitlePlate = ({ props, setTitle }) => {
  const [matcapTexture2] = useMatcapTexture("1D2424_565F66_4E555A_646C6E", 256);

  return (
    <mesh
      position={[0, 0.65, -1.5]}
      onClick={() => {
        setTitle(props.name);
      }}
    >
      <planeGeometry args={[1.07, 0.2]} />
      <meshMatcapMaterial matcap={matcapTexture2} toneMapped={false} />
    </mesh>
  );
};
export default TitlePlate;
