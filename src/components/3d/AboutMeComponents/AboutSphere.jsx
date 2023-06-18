const AboutSphere = () => {
  return (
    <mesh>
      <sphereGeometry
        attach="geometry"
        args={[10, 32, 16, 0, Math.PI * 2, 0, Math.PI / 4]}
      />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};
export default AboutSphere;
