import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";

const ContactCamera = () => {
  const cameraRef = useRef();
  return (
    <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 12]} />
  );
};
export default ContactCamera;
