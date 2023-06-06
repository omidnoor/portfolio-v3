import ImageFrame from "./ImageFrame";
import { useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { damp3, dampQ } from "maath/easing";
import { useStore } from "@/stores/store";
import { useCursor } from "@react-three/drei";
import { useCallback } from "react";

const GOLDENRATIO = 1.61803398875;

const ImageFrames = ({
  pages,
  portal,
  targetPosition = new Vector3(),
  targetQuaternion = new Quaternion(),
}) => {
  const [clicked, setClicked] = useState(false);
  const [frameEventName, _] = useState(null);
  const [nameUuid, setNameUuid] = useState([]);
  const [htmlClick, setHtmlClick] = useState(false);
  const [htmlName, setHtmlName] = useState(null);

  const framesRef = useRef({});
  const transparentFrameRef = useRef(null);

  const { addFrameUuid, frameUuids } = useStore();
  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const setFrameEventName = useStore((state) => state.setFrameEventName);

  const handleClick = (event) => {
    // event.stopPropagation();
    setClicked(true);
    if (event.object && framesRef.current) {
      const frameName = event.object.name;
      setActiveFrame({ name: frameName, uuid: event.object.uuid });
      setFrameEventName(frameName);
    }
  };

  console.log(activeFrame);

  useEffect(() => {
    if (activeFrame.name && framesRef.current) {
      // console.log(framesRef.current);
      const frame = framesRef.current.getObjectByName(activeFrame.name);
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

  useEffect(() => {
    if (framesRef.current && !frameUuids.includes(framesRef.current.uuid)) {
      addFrameUuid(framesRef.current.uuid);
    }
  }, [framesRef, addFrameUuid, frameUuids]);

  useEffect(() => {
    setNameUuid(framesRef.current?.uuid);
  }, []);

  const isActive = activeFrame?.uuid === nameUuid;
  const contentStyle = isActive ? {} : { display: "none" };

  useEffect(() => {
    console.log(htmlName);
    setActiveFrame({ ...activeFrame, name: htmlName });
  }, [htmlClick]);

  return (
    <group ref={framesRef} onClick={handleClick}>
      {pages?.map((props, index) => (
        <ImageFrame
          key={props.name}
          portal={portal}
          setClicked={setClicked}
          frameEventName={frameEventName}
          targetPosition={targetPosition}
          targetQuaternion={targetQuaternion}
          setActiveFrame={setActiveFrame}
          activeFrame={activeFrame}
          setNameUuid={setNameUuid}
          nameUuid={nameUuid}
          contentStyle={contentStyle}
          transparentFrameRef={transparentFrameRef}
          handleClick={handleClick}
          setHtmlClick={setHtmlClick}
          setHtmlName={setHtmlName}
          {...props}
        />
      ))}
    </group>
  );
};
export default ImageFrames;
