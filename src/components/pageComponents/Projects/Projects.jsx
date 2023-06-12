import { createPortal, useFrame } from "@react-three/fiber";
import ProjectsContent from "./ProjectsContent";
import { Box, PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Projects = ({ setProjectText }) => {
  const cam = useRef();
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("red");
    const target = new THREE.WebGLRenderTarget(1024, 1024, {
      format: THREE.RGBAFormat,
      stencilBuffer: false,
    });
    target.samples = 64;
    return [scene, target];
  }, []);
  useFrame((state) => {
    // cam.current.position.set([0, 0, -10]);
    // cam.current.position.z = -1 + Math.sin(state.clock.getElapsedTime());
    // cam.current.position.x = -10 + Math.sin(state.clock.getElapsedTime());
    // cam.current.rotation.z =
    // 0.1 * Math.PI * Math.sin(state.clock.getElapsedTime());
    // cam.current.lookAt(-3.5, 0.1, 0);
    cam.current.fov = 0.7;
    // cam.current.updateProjectionMatrix();
    cam.current.aspect = window.innerWidth / window.innerHeight;
    state.gl.setRenderTarget(target);
    state.gl.render(scene, cam.current);
    setProjectText(target.texture);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      <PerspectiveCamera ref={cam} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      {createPortal(<ProjectsContent />, scene)}
    </>
  );
};
export default Projects;
