import { useGLTF } from "@react-three/drei";
import Menu from "../UI/Menu/Menu";

useGLTF.preload("./models/SceneModel.glb");

const SceneModel = () => {
  const model = useGLTF("./models/SceneModel.glb");
  return (
    <>
      <primitive object={model.scene} />
    </>
  );
};
export default SceneModel;
