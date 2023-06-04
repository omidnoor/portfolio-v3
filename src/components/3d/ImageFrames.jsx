import ImageFrame from "./ImageFrame";
import { useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useStore } from "@/stores/store";
import { useCursor } from "@react-three/drei";

const GOLDENRATIO = 1.61803398875;

const ImageFrames = ({
  images,
  portal,
  targetPosition = new Vector3(),
  targetQuaternion = new Quaternion(),
}) => {
  const frameRef = useRef(null);
  const clickedRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);

  useCursor(portal);

  useEffect(() => {
    if (activeFrame) {
      const frame = frameRef.current.getObjectByName(activeFrame);
      frame.parent.updateWorldMatrix(true, true);
      frame.parent.localToWorld(targetPosition.set(0, GOLDENRATIO * 0.5, 1.25));
      frame.parent.getWorldQuaternion(targetQuaternion);
    } else {
      targetPosition.set(0, 0, 5.5);
      targetQuaternion.identity();
    }
  });

  useFrame((state, delta) => {
    damp3(state.camera.position, targetPosition, 0.4, delta);
    dampQ(state.camera.quaternion, targetQuaternion, 0.4, delta);
  });

  return (
    <group
      ref={frameRef}
      onClick={(e) => {
        e.stopPropagation();
        const frameName = e.object.name;
        setActiveFrame(frameName);
      }}
      onPointerMissed={(e) => {
        setActiveFrame(null);
      }}
    >
      {images.map((props, index) => (
        <ImageFrame
          key={index}
          hovered={hovered}
          setHovered={setHovered}
          {...props}
          portal={portal}
        />
      ))}
    </group>
  );
};
export default ImageFrames;
