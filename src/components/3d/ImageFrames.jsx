import ImageFrame from "./ImageFrame";
import { useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useStore } from "@/stores/store";
import { useCursor } from "@react-three/drei";
import { useCallback } from "react";
import { memo } from "react";

const GOLDENRATIO = 1.61803398875;

const ImageFrames = ({
  pages,
  portal,
  targetPosition = new Vector3(),
  targetQuaternion = new Quaternion(),
}) => {
  const [frameEventName, _] = useState(null);
  const [pagesName, setPagesName] = useState([]);

  const framesRef = useRef({});

  const htmlClicked = useStore((state) => state.htmlClicked);
  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const setFrameEventName = useStore((state) => state.setFrameEventName);
  const htmlName = useStore((state) => state.htmlName);
  const isLetsTalk = useStore((state) => state.isLetsTalk);
  const setIsLetsTalk = useStore((state) => state.setIsLetsTalk);

  useEffect(() => {
    pages.map((page) => {
      pagesName.push(page.name);
    });
  }, []);

  const handleClick = useCallback(
    (event) => {
      // event.stopPropagation();
      if (event.object && framesRef.current) {
        const frameName = event.object.name;
        // setFrameEventName(frameName);
        // isLetsTalk && setActiveFrame({ name: "ContactMe" });
        // !isLetsTalk && setActiveFrame({ name: frameName });
        setActiveFrame({ name: frameName });
      }
    },
    [framesRef, activeFrame.name, isLetsTalk],
  );
  // console.log(activeFrame);
  useEffect(() => {
    // console.log("useEffect triggered, activeFrame: ", activeFrame);
    if (activeFrame.name && framesRef.current) {
      const frame = framesRef.current.getObjectByName(activeFrame.name);
      frame.updateWorldMatrix(true, true);
      frame.localToWorld(targetPosition.set(0, GOLDENRATIO * 0, 22));
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

  // useEffect(() => {
  //   setActiveFrame({ name: htmlName });
  // }, [htmlClicked]);

  return (
    <group ref={framesRef} onClick={handleClick}>
      {pages?.map((props, index) => (
        <ImageFrame key={props.name} portal={portal} {...props} />
      ))}
    </group>
  );
};
export default memo(ImageFrames);
