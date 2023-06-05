import ImageFrame from "./ImageFrame";
import { useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useStore } from "@/stores/store";
import { useCursor } from "@react-three/drei";

const GOLDENRATIO = 1.61803398875;

const ImageFrames = ({
  pages,
  portal,
  targetPosition = new Vector3(),
  targetQuaternion = new Quaternion(),
}) => {
  const framesRef = useRef(null);
  const clickedRef = useRef(null);

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [frameEventName, _] = useState(null);

  useCursor(hovered);

  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const setFrameEventName = useStore((state) => state.setFrameEventName);

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
    // event.stopPropagation();
    setClicked(true);
    if (event.object) {
      const frameName = event.object.name;
      setActiveFrame(frameName);
      setFrameEventName(frameName);
    }
  };

  return (
    <group
      ref={framesRef}
      // onClick={handleClick}
      onPointerOver={(event) => {
        setFrameEventName(event.object.name);
        setHovered(true);
      }}
      onPointerOut={(e) => {
        setHovered(false);
      }}
      onPointerMissed={() => setActiveFrame(null)}
    >
      {pages?.map((props, index) => (
        <ImageFrame
          key={index}
          hovered={hovered}
          setHovered={setHovered}
          portal={portal}
          framesRef={framesRef}
          setClicked={setClicked}
          frameEventName={frameEventName}
          handleClick={handleClick}
          {...props}
        />
      ))}
    </group>
  );
};
export default ImageFrames;
