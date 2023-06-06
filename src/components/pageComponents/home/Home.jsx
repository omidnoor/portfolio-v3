import styles from "./home.module.scss";
import HomeCard from "../home/";
import HomeImage from "../HomeImage";

const Home = ({ onHover }) => {
  return (
    <div
      className={`${styles.homeSection} ${styles.blueGlow}`}
      onMouseEnter={onHover}
    >
      <HomeCard />
      <HomeImage />
    </div>
  );
};
export default Home;
