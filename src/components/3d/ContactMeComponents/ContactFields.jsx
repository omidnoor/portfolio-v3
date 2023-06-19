import { Center, Html } from "@react-three/drei";
import ContactField from "./ContactField";
import ContactRect from "./ContactRect";

const ContactFields = () => {
  return (
    <group position={[0, -1, 0]}>
      <ContactRect />
      <Html>test</Html>
    </group>
  );
};
export default ContactFields;
