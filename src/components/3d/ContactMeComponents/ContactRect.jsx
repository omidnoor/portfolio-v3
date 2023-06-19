const ContactRect = ({ rectColor, rectHeight }) => {
  return (
    <mesh scale={[10, rectHeight, 0.01]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={rectColor} />
    </mesh>
  );
};
export default ContactRect;
