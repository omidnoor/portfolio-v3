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
import ContactForm from "./ContactForm";

const ContactRect = ({
  targetPosition = new Vector3(),
  targetQuaternion = new Quaternion(),
}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cameraDistance, setCameraDistance] = useState(0);
  const [isThereCamera, setIsThereCamera] = useState(false);
  const [htmlClicked, setHtmlClicked] = useState(false);
  const contactRef = useRef();
  useCursor(hovered && !isThereCamera);

  const [matcap] = useMatcapTexture("221917_928380_5F504D_7C746C");

  useEffect(() => {
    // targetPosition.set(0, 10, 40);
    // contactRef.current.localToWorld(targetPosition.set(0, 10, 40));
  }, []);

  useEffect(() => {
    if (clicked) {
      contactRef.current.updateWorldMatrix(true, true);
      contactRef.current.localToWorld(targetPosition.set(0, 0, 15));
      contactRef.current.getWorldQuaternion(targetQuaternion);
    } else {
      targetPosition.set(0, 10, 40);
      targetQuaternion.identity();
    }
  });

  useFrame((state, delta) => {
    damp3(state.camera.position, targetPosition, 0.4, delta);
    dampQ(state.camera.quaternion, targetQuaternion, 0.4, delta);
    setCameraDistance(state.camera.position.z);
  });
  // console.log(cameraDistance);
  useEffect(() => {
    if (cameraDistance < 15.5) {
      setIsThereCamera(true);
    } else {
      setIsThereCamera(false);
    }
  }, [cameraDistance]);

  useEffect(() => {}, [htmlClicked]);

  return (
    <group
      position={[0, 9, 0]}
      ref={contactRef}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
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
        setIsThereCamera(false);
      }}
    >
      <mesh scale={[11, 16, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
      <mesh scale={[10, 15, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial metalness={0.5} roughness={0.1} color={"#fff"} />
      </mesh>
      <mesh position={[0, 0, 0.1]}>
        {isThereCamera && <ContactForm setHtmlClicked={setHtmlClicked} />}
      </mesh>
    </group>
  );
};
export default ContactRect;
