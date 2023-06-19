import { Html, Text } from "@react-three/drei";
import { useState } from "react";
import ContactRect from "./ContactRect";
import ControlledInput from "@/components/utilComponents/UI/Inputs/ControlledInput";

const ContactField = ({ position, width, height, rectHeight, inputType }) => {
  const [name, setName] = useState("Enter Your Name");
  const [rectColor, setRectColor] = useState("#fff");
  return (
    <group
      onPointerUp={(e) => {
        // e.stopPropagation();
        setRectColor("#e0e0e0");
        setName("");
      }}
      onPointerMissed={(e) => {
        // e.stopPropagation();
        setRectColor("#fff");
        setName("Enter Your Name");
      }}
    >
      <Text
        anchorX="0px"
        font="/Inter-regular.ttf"
        fontSize={0.3}
        position={position}
      >
        {name}
        <meshBasicMaterial color="#555" />
      </Text>
      <mesh position={position}>
        <Html transform sprite>
          <ControlledInput
            inputType={inputType}
            onChange={(e) => setName(e.target.value)}
            value={name}
            width={width}
            height={height}
          />
        </Html>
        <ContactRect rectColor={rectColor} rectHeight={rectHeight} />
      </mesh>
    </group>
  );
};
export default ContactField;
