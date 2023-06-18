import * as THREE from "three";

import { useMemo } from "react";
import AboutWord from "./AboutWord";
import { wordsTech } from "./AboutWords";

const AboutCloud = ({ count = 4, radius = 30 }) => {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const theta = Math.PI / 2 / (count + 1);
    const phi = (2 * Math.PI) / (count * 2);

    const randWords = () => {
      return wordsTech[Math.floor(Math.random() * (wordsTech.length - 2))];
    };
    console.log(Math.random() * wordsTech.length - 1);
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count * 2; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, theta * i, phi * j),
          ),
          randWords(),
        ]);
      }
    }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <AboutWord key={index} position={pos} children={word} />
  ));
};
export default AboutCloud;
