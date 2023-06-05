import styles from "./aboutme.module.scss";
import { useStore } from "@/stores/store";

const AboutMe = ({ onHover, setClicked }) => {
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const frameEventName = useStore((state) => state.frameEventName);

  const handleClick = () => {
    if (frameEventName) {
      setClicked(true);
      setActiveFrame(frameEventName);
    }
  };

  return (
    <div className={styles.AboutMe} onMouseOver={onHover} onClick={handleClick}>
      <h1>Hi, my name is Omid Noorshams</h1>
      <p>This is the about me page</p>
    </div>
  );
};
export default AboutMe;
