import { Button } from "@mui/material";

import styles from "./styles.module.scss";
import { useStore } from "@/stores/store";

export default function ButtonUI({ children, type }) {
  const setActiveFrame = useStore((state) => state.setActiveFrame);
  const activeFrame = useStore((state) => state.activeFrame);
  const setIsLetsTalk = useStore((state) => state.setIsLetsTalk);
  const isLetsTalk = useStore((state) => state.isLetsTalk);

  const hanldeClick = () => {
    if (type === "primary") {
      setIsLetsTalk(true);
    } else {
      setIsLetsTalk(false);
    }
  };

  return (
    <div onClick={hanldeClick}>
      {type === "primary" ? (
        <Button
          variant="contained"
          color="primary"
          className={`${styles.btn} ${styles.btnContained}`}
        >
          {children}
        </Button>
      ) : type === "secondary" ? (
        <Button
          variant="outlined"
          color="primary"
          className={`${styles.btnOutlined} ${styles.btn} `}
        >
          {children}
        </Button>
      ) : (
        ""
      )}
      {/* <Button /> */}
    </div>
  );
}
