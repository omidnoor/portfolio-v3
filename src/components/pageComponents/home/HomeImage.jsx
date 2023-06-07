import Image from "next/image";
import styles from "./home.module.scss";

export default function HomeImage() {
  return (
    <div className={styles.homeImage}>
      <Image src="/omid-noorshams.jpg" alt="image" height={200} width={200} />
    </div>
  );
}
