import styles from "./projects.module.scss";
import { Canvas, createPortal, extend, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { SKY_BLUE } from "@/components/utilComponents/variables/colors";
import { WebGLRenderer } from "three";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import ProjectsContent from "./ProjectsContent";

extend({ PerspectiveCamera });

const Projects = () => {
  const cam = useRef();
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(SKY_BLUE);
    const target = new THREE.WebGLMultipleRenderTargets(1024, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      stencilBuffer: false,
    });
    target.sample = 8;
    return [scene, target];
  }, []);

  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.render(scene, cam.current);
    state.gl.setRenderTarget(null);
  });
  return (
    <>
      <perspectiveCamera ref={cam} position={[0, 0, 2]} />
      <ProjectsContent />
    </>
  );
};
export default Projects;
