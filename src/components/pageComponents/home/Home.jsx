import styles from "./home.module.scss";
import HomeCard from "../home/HomeCard";
import HomeImage from "../home/HomeImage";
import Image from "next/image";

const Home = ({ onHover }) => {
  return (
    <div
      className={`${styles.homeSection} `}
      // onMouseEnter={onHover}
    >
      {/* <Image
        src="/iStock-1437609537.jpg"
        width={300}
        height={300}
        alt="coding-dev-image"
        loading="lazy"
      /> */}
      <HomeCard />
      {/* <HomeImage /> */}
    </div>
  );
};
export default Home;
