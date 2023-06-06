import Image from "next/image";
import styles from "./styles.module.scss";

export default function HomeImage() {
  return (
    <div className={styles.homeImage}>
      <Image src="/favicon.ico" alt="image" height={200} width={200} />
    </div>
  );
}
