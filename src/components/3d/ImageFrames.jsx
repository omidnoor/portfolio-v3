import ImageFrame from "./ImageFrame";
import { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useStore } from "@/stores/store";

const GOLDENRATIO = 1.61803398875;

const ImageFrames = ({ images, q = new Quaternion(), p = new Vector3() }) => {
  console.log(images);
  const frameRef = useRef(null);
  const clickedRef = useRef(null);

  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);

  useEffect(() => {
    if (clickedRef.current) {
      clickedRef.current.parent.updateWorldMatrix(true, true);
      clickedRef.current.localToWorld(p.set(0, GOLDENRATIO * 0.5, 1.25));
      clickedRef.current.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });

  useFrame((state, delta) => {
    damp3(state.camera.position, p, 0.4, delta);
    dampQ(state.camera.quaternion, q, 0.4, delta);
  });

  return (
    <group
      ref={frameRef}
      onClick={(e) => {
        e.stopPropagation();
        // setActiveFrame()
      }}
      onPointerMissed={(e) => {}}
    >
      {images.map((props, index) => (
        <ImageFrame key={index} {...props} />
      ))}
    </group>
  );
};
export default ImageFrames;
