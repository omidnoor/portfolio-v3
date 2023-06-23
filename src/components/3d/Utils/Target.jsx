import { MeshReflectorMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { memo, useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";

let targetPosition = new Vector3();
let targetQuaternion = new Quaternion();

const Target = ({ position, rotation, args, id }) => {
  const meshRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [activatedTarget, setActivatedTarget] = useState(null);

  useEffect(() => {
    if (clicked) {
      meshRef.current.updateWorldMatrix(true, true);
      meshRef.current.localToWorld(targetPosition.set(0, 0, 2));
      meshRef.current.getWorldQuaternion(targetQuaternion);
    } else {
      targetQuaternion.identity();
      targetPosition.set(0, 0, 0);
    }
  }, [clicked, meshRef]);
  useFrame((state, delta) => {
    damp3(state.camera.position, targetPosition, 2, delta);
    dampQ(state.camera.quaternion, targetQuaternion, 2, delta);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={() => {
        setClicked(true);
        setActivatedTarget(id);
      }}
      onPointerMissed={() => {
        setClicked(false);
        setActivatedTarget(null);
      }}
    >
      <boxGeometry args={args} />
      <MeshReflectorMaterial roughness={0.1} metalness={0.5} color="#f2c800" />
    </mesh>
  );
};

export default memo(Target);
