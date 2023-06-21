import { Html, useProgress } from "@react-three/drei";

const CustomLoader = () => {
  const { active, progress, errors, item, loader, total } = useProgress();
  // console.log(
  //   "Progress:",
  //   progress,
  //   "Active:",
  //   active,
  //   "Errors:",
  //   errors,
  //   "Item:",
  //   item,
  //   "Loader:",
  //   loader,
  //   "Total:",
  //   total,
  // );

  return (
    <Html center>
      <h1>Loading...</h1>

      {active && <span style={{ color: "red" }}>{progress.toFixed(0)} %</span>}
    </Html>
  );
};
export default CustomLoader;
