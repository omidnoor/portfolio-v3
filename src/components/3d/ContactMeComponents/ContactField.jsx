import { Text } from "@react-three/drei";
import { useState } from "react";
import ContactRect from "./ContactRect";

const ContactField = () => {
  const [name, setName] = useState("Enter Your Name");
  return (
    <group>
      <Text
        anchorX="0px"
        font="/Inter-regular.ttf"
        fontSize={0.3}
        position={[-4.5, 0, 0.1]}
      >
        {name}
        <meshStandardMaterial color="#000" />
      </Text>
      <ContactRect />
    </group>
  );
};
export default ContactField;
