import { useMatcapTexture } from "@react-three/drei";
import { useEffect } from "react";
import { useState } from "react";

const TitlePlate = ({ props, setTitle }) => {
  const [matcapTexture2, setMatcapTexture2] = useState(null);
  const matcap = useMatcapTexture("1D2424_565F66_4E555A_646C6E", 256);
  useEffect(() => {
    setMatcapTexture2(matcap);
  }, [matcap]);

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
