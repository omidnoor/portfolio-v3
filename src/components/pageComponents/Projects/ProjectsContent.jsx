import { MeshWobbleMaterial } from "@react-three/drei";
import ProjectGroup from "./ProjectGroup";

const ProjectsContent = () => {
  return (
    <group>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ProjectGroup />
    </group>
  );
};
export default ProjectsContent;
