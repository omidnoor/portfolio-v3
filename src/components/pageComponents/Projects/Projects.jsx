import { createPortal, useFrame } from "@react-three/fiber";
import ProjectsContent from "./ProjectsContent";
import {
  Dodecahedron,
  GizmoHelper,
  GizmoViewport,
  OrthographicCamera,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Deep_Blue } from "@/components/utilComponents/variables/colors";
import { useControls } from "leva";

const Projects = () => {
  const cam = useRef();
  // const { camX, camY, camZ, camRX, camRY, camRZ } = useControls({
  //   camX: {
  //     value: -7.94,
  //     min: -20,
  //     max: 20,
  //     step: 0.001,
  //   },
  //   camY: {
  //     value: 6.54,
  //     min: -20,
  //     max: 20,
  //     step: 0.001,
  //   },
  //   camZ: {
  //     value: 0,
  //     min: -20,
  //     max: 100,
  //     step: 0.01,
  //   },
  //   camRX: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.01,
  //   },
  //   camRY: {
  //     value: Math.PI / 4,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.01,
  //   },
  //   camRZ: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //     step: 0.01,
  //   },
  // });
  // console.log(cam.current);
  // THREE.ColorManagement.enabled = true;

  useEffect(() => {
    window.addEventListener("resize", () => {
      const aspect = window.innerWidth / window.innerHeight;

      if (cam.current) {
        cam.current.aspect = aspect;
        cam.current.updateProjectionMatrix();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [window.innerWidth, window.innerHeight]);

  return (
    <mesh position={[0, 0, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera position={[0, 0, 5]} />
          <color attach="background" args={[Deep_Blue]} />
          <ProjectsContent />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
export default Projects;
