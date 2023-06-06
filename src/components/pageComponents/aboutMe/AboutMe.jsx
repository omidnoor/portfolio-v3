import styles from "./aboutme.module.scss";
import { useStore } from "@/stores/store";

const AboutMe = ({ onHover }) => {
  return (
    <div className={styles.aboutme} onMouseEnter={onHover}>
      <h1>Hi, my name is Omid Noorshams</h1>
      <p>Website Developer and Designer</p>
      <p>Website Developer and Designer</p>
      <p>Website Developer and Designer</p>
      <p>Website Developer and Designer</p>
      <p>Website Developer and Designer</p>
      <p>Website Developer and Designer</p>
    </div>
  );
};
export default AboutMe;
