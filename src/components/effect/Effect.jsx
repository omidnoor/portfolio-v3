import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Effect = () => {
  return (
    <EffectComposer multisampling={8}>
      {/* <Bloom mipmapBlur intensity={0.09} luminanceThreshold={0} /> */}
    </EffectComposer>
  );
};
export default Effect;
