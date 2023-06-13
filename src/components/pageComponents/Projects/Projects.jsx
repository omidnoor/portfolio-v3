import { createPortal, useFrame } from "@react-three/fiber";
import ProjectsContent from "./ProjectsContent";
import {
  GizmoHelper,
  GizmoViewport,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Deep_Blue } from "@/components/utilComponents/variables/colors";
import { useControls } from "leva";

const Projects = ({ setProjectText }) => {
  const cam = useRef();
  const tl = useRef();
  const { camX, camY, camZ, camRX, camRY, camRZ } = useControls({
    camX: {
      value: -7.94,
      min: -20,
      max: 20,
      step: 0.001,
    },
    camY: {
      value: 6.54,
      min: -20,
      max: 20,
      step: 0.001,
    },
    camZ: {
      value: 0,
      min: -20,
      max: 100,
      step: 0.01,
    },
    camRX: {
      value: 0,
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    camRY: {
      value: Math.PI / 4,
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    camRZ: {
      value: 0,
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
  });
  // console.log(cam.current);
  THREE.ColorManagement.enabled = true;
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(Deep_Blue);
    const target = new THREE.WebGLRenderTarget(1024, 1024, {
      format: THREE.RGBAFormat,
      stencilBuffer: true,
    });
    // scene.rotation.y = -Math.PI / 4;
    target.samples = 64;
    target.texture.needsPMREMUpdate = true;
    return [scene, target];
  }, []);

  useFrame((state) => {
    cam.current.top = camY;
    cam.current.left = -camX;
    cam.current.bottom = -camY;
    cam.current.right = camX;
    state.gl.setRenderTarget(target);
    state.gl.render(scene, cam.current);
    setProjectText(target.texture);
    state.gl.setRenderTarget(null);
  });

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
    <>
      <OrthographicCamera ref={cam} />
      {createPortal(<ProjectsContent />, scene)}
    </>
  );
};
export default Projects;
