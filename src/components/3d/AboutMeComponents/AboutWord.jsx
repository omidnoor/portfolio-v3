import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const AboutWord = ({ children, wordType, wordColor, ...props }) => {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": true,
  };
  //   const material = new THREE.MeshMatcapMaterial({ matcapTexture });

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
    if (
      !hovered &&
      (wordType === "tech" ||
        wordType === "general" ||
        wordType === "education")
    ) {
      textRef.current.material.color.lerp(
        color.set(wordColor.get()[wordType]),
        0.1,
      );
    } else {
      textRef.current.material.color.lerp(color.set("#ffc400"), 0.1);
    }
  });

  return (
    <Text
      ref={textRef}
      {...fontProps}
      //   material={material}
      onPointerOver={handleMouseOver}
      onPointerOut={handleMouseOut}
      children={children}
      {...props}
    />
  );
};
export default AboutWord;
