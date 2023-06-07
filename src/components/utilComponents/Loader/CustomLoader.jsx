import { Html, useProgress } from "@react-three/drei";

const CustomLoader = () => {
  const { active, progress, errors, item, loader, total } = useProgress();
  return (
    <Html center>
      <span style={{ color: "red" }}>{progress.toFixed(0)} %</span>
    </Html>
  );
};
export default CustomLoader;
