import { useMatcapTexture } from "@react-three/drei";
import { useEffect } from "react";
import { useState } from "react";

const TitlePlate = ({ props, setTitle }) => {
  const [matcapTexture2] = useMatcapTexture("221917_928380_5F504D_7C746C", 256);

  return (
    <mesh
      position={[0, 0.65, -1.5]}
      onClick={() => {
        setTitle(props.name);
      }}
    >
      <planeGeometry args={[1.07, 0.2]} />
      <meshMatcapMaterial matcap={matcapTexture2} />
    </mesh>
  );
};
export default TitlePlate;
