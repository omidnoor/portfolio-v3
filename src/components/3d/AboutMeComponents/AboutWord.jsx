import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const AboutWord = ({ children, ...props }) => {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handleMouseOut = (e) => {
    setHovered(false);
  };

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  useFrame((state, delta) => {
    textRef.current.quaternion.copy(state.camera.quaternion);
    textRef.current.material.color.lerp(
      color.set(hovered ? "#ffc400" : "#fff"),
      0.1,
    );
  });

  return (
    <Text
      ref={textRef}
      {...fontProps}
      onPointerOver={handleMouseOver}
      onPointerOut={handleMouseOut}
      children={children}
      {...props}
    />
  );
};
export default AboutWord;
