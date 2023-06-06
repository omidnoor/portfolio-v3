import styles from "./home.module.scss";
import { useStore } from "@/stores/store";

const Home = ({ onHover }) => {
  return (
    <div className={styles.home} onMouseEnter={onHover}>
      <h1>Hi, my name is Omid Noorshams</h1>
      <p>Website Developer and Designer</p>
    </div>
  );
};
export default Home;
