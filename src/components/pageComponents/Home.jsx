import styles from "./home.module.scss";
import { useStore } from "@/stores/store";

const Home = ({ onHover, setClicked, frameEvent }) => {
  const activeFrame = useStore((state) => state.activeFrame);
  const setActiveFrame = useStore((state) => state.setActiveFrame);

  const handleClick = () => {
    frameEvent.stopPropagation();
    console.log(frameEvent.object);
    setClicked(true);
    if (frameEvent.object) {
      console.log(frameEvent);
      const frameName = frameEvent.object.name;
      setActiveFrame(frameName);
    }
  };

  return (
    <div className={styles.home} onMouseOver={onHover} onClick={handleClick}>
      <h1>Hi, my name is Omid Noorshams</h1>
      <p>Website Developer and Designer</p>
    </div>
  );
};
export default Home;
