const ContactRect = () => {
  return (
    <mesh scale={[10, 1, 0.01]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#fff" />
    </mesh>
  );
};
export default ContactRect;
