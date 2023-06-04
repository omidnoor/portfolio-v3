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
  const framesRef = useRef(null);
  const clickedRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [frameEvent, setFrameEvent] = useState(null);

  useCursor(hovered);

  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);

  useCursor(portal);

  useEffect(() => {
    if (activeFrame) {
      const frame = framesRef.current.getObjectByName(activeFrame);
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

  const handleClick = (event) => {
    event.stopPropagation();
    console.log(event.object);
    setClicked(true);
    if (event.object) {
      const frameName = event.object.name;
      setActiveFrame(frameName);
      setFrameEvent(event);
    }
  };

  return (
    <group
      ref={framesRef}
      onClick={handleClick}
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
          framesRef={framesRef}
          setClicked={setClicked}
          frameEvent={frameEvent}
        />
      ))}
    </group>
  );
};
export default ImageFrames;
