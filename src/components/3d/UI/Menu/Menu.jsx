import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import MenuPlate from "./MenuPlate";

const Menu = () => {
  const { camera } = useThree();
  const meshRef = useRef();

  useEffect(() => {
    camera.add(meshRef.current);
    return () => {
      camera.remove(meshRef.current);
    };
  }, [camera]);

  return (
    <group>
      <mesh
        ref={meshRef}
        position={[0, -0.7, -2]}
        rotation={[-Math.PI / 4, 0, 0]}
      >
        <MenuPlate />
      </mesh>
    </group>
  );
};
export default Menu;
