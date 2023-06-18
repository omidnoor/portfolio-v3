import AboutCloud from "@/components/3d/AboutMeComponents/AboutCloud";
import AboutSphere from "@/components/3d/AboutMeComponents/AboutSphere";
import CustomLoader from "@/components/utilComponents/Loader/CustomLoader";
import { a } from "@react-spring/web";

import {
  Environment,
  TrackballControls,
  useEnvironment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSpring } from "react-spring";

const AboutMe = () => {
  const [{ background, fill, wordColor }, set] = useSpring(
    {
      background: "#fcfcff",
      fill: "#000039",
      wordColor: {
        tech: "#000039",
        education: "#0b0210",
        general: "#021510",
      },
    },
    [],
  );

  return (
    <a.div
      style={{
        background,
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        // colorManagement
        dpr={[1, 2]}
        camera={{ position: [0, 0, 55], fov: 100 }}
      >
        <Suspense fallback={<CustomLoader />}>
          <Suspense fallback={<CustomLoader />}>
            <fog attach="fog" args={["#000066", 0, 100]} />
          </Suspense>
          {/* <color attach="background" args={[presetTexture]} /> */}
          <ambientLight intensity={1} />
          {/* <pointLight position={[40, 40, 40]} intensity={1} /> */}
          <AboutCloud count={10} radius={40} wordColor={wordColor} />
          <AboutSphere setBg={set} wordColor={wordColor} />
          <TrackballControls />
        </Suspense>
      </Canvas>
    </a.div>
  );
};
export default AboutMe;
