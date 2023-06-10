import styles from "./home.module.scss";
import HomeCard from "../home/HomeCard";
import HomeImage from "../home/HomeImage";
import Image from "next/image";
import { Deep_Blue } from "@/components/utilComponents/variables/colors";
import { memo } from "react";

const Home = () => {
  return (
    <div className={`${styles.homeSection}`}>
      <HomeCard />
      {/* <HomeImage /> */}
    </div>
  );
};
export default memo(Home);
