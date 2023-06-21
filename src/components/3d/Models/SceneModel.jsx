import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SceneModel = () => {
  const model = useGLTF("./models/SceneModel.glb");
  console.log(model);
  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
};
export default SceneModel;
