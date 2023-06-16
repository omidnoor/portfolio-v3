import { useStore } from "@/stores/store";
import ProjectPlate from "./ProjectPlate";

const ProjectGroup = ({ props }) => {
  const GOLDENRATIO = useStore((state) => state.GOLDENRATIO);

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
