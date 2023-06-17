import styles from "./styles.module.scss";

const FrameButton = () => {
  return (
    // <div className={styles.FrameButton}>
    //   <div className={styles.FrameButton_left}></div>
    //   <div className={styles.FrameButton_right}></div>
    // </div>
    <div className={styles.FrameButton}>
      <div className={styles.FrameButton_right}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
      <div className={styles.FrameButton_left}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l5.147-5.146a.5.5 0 1 0-.708-.708l-6 6a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"
          />
        </svg>
      </div>
    </div>
  );
};
export default FrameButton;
