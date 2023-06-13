import { MeshWobbleMaterial } from "@react-three/drei";
import ProjectGroup from "./ProjectGroup";

const ProjectsContent = () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} intensity={10} />
      <ProjectGroup />
    </group>
  );
};
export default ProjectsContent;
