import { Button } from "@mui/material";

import styles from "./styles.module.scss";

export default function ButtonUI({ children, type }) {
  return (
    <div>
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
