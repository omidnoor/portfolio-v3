import {
  Deep_Blue,
  SKY_BLUE,
} from "@/components/utilComponents/variables/colors";
import { useCursor, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Quaternion, Vector3 } from "three";

const ContactRect = ({
  targetPosition = new Vector3(),
  targetQuaternion = new Quaternion(),
}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const contactRef = useRef();
  useCursor(hovered);

  const [matcap] = useMatcapTexture("221917_928380_5F504D_7C746C");

  useEffect(() => {
    if (clicked) {
      contactRef.current.updateWorldMatrix(true, true);
      contactRef.current.localToWorld(targetPosition.set(0, 1, 4.2));
      contactRef.current.getWorldQuaternion(targetQuaternion);
    } else {
      targetPosition.set(0, 0, 10);
      targetQuaternion.identity();
    }
  });

  useFrame((state, delta) => {
    damp3(state.camera.position, targetPosition, 0.4, delta);
    dampQ(state.camera.quaternion, targetQuaternion, 0.4, delta);
  });

  return (
    <group
      ref={contactRef}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
        // console.log(e);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setClicked(true);
      }}
      onPointerMissed={(e) => {
        e.stopPropagation();
        setClicked(false);
      }}
    >
      <mesh scale={[2, 1.5, 0.1]} position={[0, 1.2, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
      <mesh scale={[1.9, 1.4, 0.1]} position={[0, 1.2, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial metalness={0.5} roughness={0.1} color={"#fff"} />
      </mesh>
    </group>
  );
};
export default ContactRect;
