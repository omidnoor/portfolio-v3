import { MeshWobbleMaterial } from "@react-three/drei";
import ProjectGroup from "./ProjectGroup";

const ProjectsContent = ({ props }) => {
  return (
    <group>
      <ambientLight intensity={0.1} />
      <pointLight position={[30, 30, 30]} intensity={0.2} />
      <ProjectGroup props={props} />
    </group>
  );
};
export default ProjectsContent;
