import { useState } from "react";
import styles from "../projects.module.scss";
import GithubButton from "./GithubButton";
import WebLinkButton from "./WebLinkButton";
import { useSpring } from "react-spring";

const ProjectButtons = () => {
  return (
    <div className={styles.buttons}>
      <GithubButton />
      <WebLinkButton />
    </div>
  );
};
export default ProjectButtons;
