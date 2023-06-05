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
  const [clicked, setClicked] = useState(false);
  const [frameEventName, _] = useState(null);
  const framesRef = useRef(null);

  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const setFrameEventName = useStore((state) => state.setFrameEventName);

  useEffect(() => {
    if (activeFrame) {
      const frame = framesRef.current.getObjectByName(activeFrame);
      frame.updateWorldMatrix(true, true);
      frame.localToWorld(targetPosition.set(0, GOLDENRATIO * 0, 20));
      frame.getWorldQuaternion(targetQuaternion);
    } else {
      targetPosition.set(0, 0, 5.5);
      targetQuaternion.identity();
    }
  });

  useFrame((state, delta) => {
    damp3(state.camera.position, targetPosition, 0.4, delta);
    dampQ(state.camera.quaternion, targetQuaternion, 0.4, delta);
  });

  // const handleClick = (event) => {
  //   // event.stopPropagation();
  //   setClicked(true);
  //   if (event.object) {
  //     const frameName = event.object.name;
  //     setActiveFrame(frameName);
  //     setFrameEventName(frameName);
  //   }
  // };

  return (
    <group ref={framesRef}>
      {pages?.map((props, index) => (
        <ImageFrame
          key={index}
          portal={portal}
          setClicked={setClicked}
          frameEventName={frameEventName}
          targetPosition={targetPosition}
          targetQuaternion={targetQuaternion}
          // handleClick={handleClick}
          {...props}
        />
      ))}
    </group>
  );
};
export default ImageFrames;
