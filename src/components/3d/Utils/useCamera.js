import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useState } from "react";
import { Quaternion, Vector3 } from "three";

const useCamera = () => {
  const [target, setTarget] = useState(new Vector3());
  const [quaternion, setQuaternion] = useState(new Quaternion());
  useFrame((state, delta) => {
    damp3(state.camera.position, target, 2, delta);
    dampQ(state.camera.quaternion, quaternion, 2, delta);
  });
  return [setTarget, setQuaternion];
};
export default useCamera;
