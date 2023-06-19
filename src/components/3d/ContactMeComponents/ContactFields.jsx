import { Center } from "@react-three/drei";
import ContactField from "./ContactField";

const ContactFields = () => {
  return (
    <group position={[0, -1, 0]}>
      <Center>
        <ContactField
          position={[-2.2, 0, 0.1]}
          width={"400px"}
          height={"40px"}
          rectHeight={1}
          inputType="text"
        />
        <ContactField
          position={[-2.2, -1.5, 0.1]}
          width={"400px"}
          height={"40px"}
          rectHeight={1}
          inputType="text"
        />
        <ContactField
          position={[-2.2, -4, 0.1]}
          width={"400px"}
          height={"100px"}
          rectHeight={2.5}
          inputType="textarea"
        />
      </Center>
    </group>
  );
};
export default ContactFields;
