import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import styles from "./home.module.scss";
import MagicWriter from "@/components/utilComponents/MagicWriter";
import ButtonUI from "@/components/utilComponents/UI/Button";

export default function HomeCard() {
  return (
    <div className={styles.HomeCard}>
      

      <div className={styles.HomeCard__intro}>
        <h2>
          Hello I'm &nbsp;<span> Omid</span>
        </h2>
        {/* <div className={styles.HomeCard__intro__skills}>
          <h1>
            <MagicWriter text1="Next/React Dev" text2="Cross Platform Dev" />
          </h1>
        </div> */}
        <p>Knack of building with front end and backend operations</p>
      </div>
      {/* <div className={styles.HomeCard__actions}>
        <ButtonUI type="primary">let's talk</ButtonUI>
        <ButtonUI type="secondary">Resume</ButtonUI>
      </div> */}
      <div className={styles.HomeCard__socials}>
        <FaFacebookSquare />
        <ImLinkedin />
        <FaInstagram />
        <FaTwitterSquare />
      </div>
    </div>
  );
}
