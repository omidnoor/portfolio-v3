import { MeshWobbleMaterial } from "@react-three/drei";
import ProjectGroup from "./ProjectGroup";

const ProjectsContent = () => {
  return (
    <group>
      <ambientLight intensity={0.1} />
      <pointLight position={[30, 30, 30]} intensity={0.2} />
      <ProjectGroup />
    </group>
  );
};
export default ProjectsContent;
