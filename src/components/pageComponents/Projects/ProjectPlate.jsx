import styles from "./projects.module.scss";
import ProjectButtons from "./ProjectButtons/ProjectButtons";

const ProjectPlate = ({ index, pages }) => {
  return (
    <>
      <div className={styles.plate}>
        <div className={styles.plate_title}>
          <h1>{pages[index].title}</h1>
        </div>
        <div className={styles.plate_frameworks}>
          <p>
            Framewoks: <span>{pages[index].frameworks}</span>
          </p>
        </div>
        <div className={styles.plate_description}>
          <p>{pages[index].description}</p>
        </div>
      </div>
      <div className={styles.links}>
        <ProjectButtons />
      </div>
    </>
  );
};
export default ProjectPlate;
