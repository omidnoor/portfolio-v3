import * as THREE from "three";

import { useMemo } from "react";
import AboutWord from "./AboutWord";
import { wordsTech, wordsEducation, wordsGeneral } from "./AboutWords";
import { useMatcapTexture } from "@react-three/drei";

const AboutCloud = ({ count = 4, radius = 30, wordColor }) => {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();

    const theta = Math.PI / (count + 1);
    const phi = (2 * Math.PI) / (count * 2);

    const randWords = (type = "tech") => {
      if (type === "tech") {
        return wordsTech[Math.floor(Math.random() * (wordsTech.length - 2))];
      } else if (type === "education") {
        return wordsEducation[
          Math.floor(Math.random() * (wordsEducation.length - 2))
        ];
      } else if (type === "general") {
        return wordsGeneral[
          Math.floor(Math.random() * (wordsGeneral.length - 2))
        ];
      }
    };
    // console.log(randWords("general"));
    let word = "";
    let wordType = "";
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count * 2; j++) {
        if (i < 5) {
          word = randWords("tech");
          wordType = "tech";
        } else if (i > 5 && i < 8) {
          word = randWords("general");
          wordType = "general";
        } else if (i > 7) {
          word = randWords("education");
          wordType = "education";
        }
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, theta * i, phi * j),
          ),
          word,
          wordType,
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  return words.map(([pos, word, wordType], index) => (
    <AboutWord
      key={index}
      position={pos}
      wordType={wordType}
      children={word}
      wordColor={wordColor}
    />
  ));
};
export default AboutCloud;
