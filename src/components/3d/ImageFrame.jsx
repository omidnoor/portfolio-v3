import { useLoader } from "@react-three/fiber";
import { Html, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const ImageFrame = ({ url, position }) => {
  const texture = useLoader(THREE.TextureLoader, url);
  return (
    <mesh>
      <boxGeometry scale={[10, 10, 10]} />
      <meshBasicMaterial color={"red"} />
      {/* <Html position={[0, 0, 0.5]}>
        <iframe
          src={url}
          title="iframe"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </Html> */}
    </mesh>
  );
};
export default ImageFrame;
