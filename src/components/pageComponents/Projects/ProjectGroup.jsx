import ProjectPlate from "./ProjectPlate";

const ProjectGroup = () => {
  return (
    <group>
      <ProjectPlate
        position={[-2.15, 0.25, 1.5]}
        rotation={[0, Math.PI * 0.25, 0]}
      />
      <ProjectPlate
        position={[-2.15, 0.25, 1.5]}
        rotation={[0, Math.PI * 0.25, 0]}
      />
    </group>
  );
};
export default ProjectGroup;
