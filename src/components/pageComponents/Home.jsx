import styles from "./home.module.scss";
import { useStore } from "@/stores/store";

const Home = ({ onHover, setClicked }) => {
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const frameEventName = useStore((state) => state.frameEventName);

  const handleClick = () => {
    if (frameEventName) {
      setClicked(true);
      setActiveFrame(frameEventName);
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
