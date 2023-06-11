import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./home.module.scss";
import MagicWriter from "@/components/utilComponents/MagicWriter";
import ButtonUI from "@/components/utilComponents/UI/Button";
import Link from "next/link";

export default function HomeCard() {
  return (
    <div className={styles.HomeCard}>
      <div className={styles.HomeCard__intro}>
        <h3>
          Hi, my name is &nbsp;<span>Omid</span>
        </h3>
        <br />
        <br />
        <h3>I am a</h3>
        <br />
        <div className={styles.HomeCard__intro__skills}>
          <h1>
            <MagicWriter
              text1="ReactJS/NextJS"
              text2="Ecommerce Web"
              text3="3D/2D Web"
            />
          </h1>
        </div>
        {/* <p> front end and backend operations</p> */}
        <h2>Developer & Desinger</h2>
      </div>
      <div className={styles.HomeCard__actions}>
        <ButtonUI type="primary">let's talk</ButtonUI>
        <ButtonUI type="secondary">Resume</ButtonUI>
      </div>
      <br />
      <div className={styles.HomeCard__socials}>
        <Link href="https://github.com/omidnoor" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/omidnoorshams/" target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
