import Target from "./Target";
import { memo } from "react";

const TargetCamera = () => {
  return (
    <>
      <Target
        id="target1"
        position={[-10, 2.5, -12]}
        rotation={[0, 1.5, 0]}
        args={[1.5, 2.1, 0.1]}
      />
      <Target
        id="target2"
        position={[3.5, 2.5, -12]}
        rotation={[0, 0, 0]}
        args={[1.5, 2.1, 0.1]}
      />
      <Target
        id="target3"
        position={[-2, 2.5, -12]}
        rotation={[0, 0, 0]}
        args={[1.5, 2.1, 0.1]}
      />
    </>
  );
};
export default memo(TargetCamera);
