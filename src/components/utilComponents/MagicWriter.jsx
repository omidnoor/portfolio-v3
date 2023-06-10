import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import useTypewriter from "react-typewriter-hook";

const texts = ["First text", "Second text"];

const MagicWriter = ({ text1, icon1, text2, icon2 }) => {
  const texts = [text1, text2];
  const [textIndex, setTextIndex] = useState(0);
  const textToShow = useTypewriter(texts[textIndex], {
    typingSpeed: 100,
    deleteSpeed: 50,
  });

  useEffect(() => {
    if (textToShow === texts[textIndex]) {
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }
  }, [textToShow, textIndex]);
  // console.log(textIndex, textToShow, texts[textIndex]);
  return (
    <span>
      {textToShow}
      {textToShow === texts[0] ? (
        <>
          {/* <TbBrandNextjs
            style={{ color: "rgba(1, 200, 255)", height: "30px" }}
          />
          <FaReact style={{ color: "rgba(1, 200, 255)", height: "30px" }} /> */}
        </>
      ) : (
        ""
      )}
    </span>
  );
};

export default MagicWriter;
