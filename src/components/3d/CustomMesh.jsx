import { useState } from "react";
import { useEffect } from "react";
import { forwardRef } from "react";
import {
  BoxGeometry,
  ColorManagement,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";

const GOLDENRATIO = 1.61803398875;

// Create shared instances of the geometries and materials
const outerGeometry = new BoxGeometry();
const outerMaterial = new MeshStandardMaterial({
  color: "#151515",
  metalness: 0.5,
  roughness: 0.5,
  envMapIntensity: 2,
});

const innerGeometry = new BoxGeometry();
const innerMaterial = new MeshBasicMaterial({
  toneMapped: false,
  fog: false,
});
outerMaterial.color.set("#151515");
ColorManagement.enabled = true;

export const CustomMesh = ({
  outerScale = [1, GOLDENRATIO, 0.05],
  outerPosition = [0, GOLDENRATIO / 2, 0],
  innerScale = [0.9, 0.93, 0.9],
  innerPosition = [0, 0, 0.2],
  children,
  frameRef,
  name,
  handleClick,
  ...props
}) => {
  const [nameUuid, setNameUuid] = useState(name);
  // Update the material color for this specific mesh

  useEffect(() => {
    setNameUuid(frameRef.current?.uuid);
  }, []);

  return (
    <mesh
      onClick={handleClick}
      geometry={outerGeometry}
      material={outerMaterial}
      scale={outerScale}
      position={outerPosition}
      name={nameUuid}
      {...props}
    >
      <mesh
        ref={frameRef}
        raycast={() => null}
        geometry={innerGeometry}
        material={innerMaterial}
        scale={innerScale}
        position={innerPosition}
      >
        {children}
      </mesh>
    </mesh>
  );
};
