import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import styles from "./styles.module.scss";

const ControlledInput = ({
  value,
  onChange,
  width,
  height,
  inputType,
  ...rest
}) => {
  const [cursor, setCursor] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(cursor, cursor);
    }
  }, [cursor, inputRef, value]);
  const handleChange = (e) => {
    setCursor(e.target.selectionStart);
    onChange && onChange(e);
  };
  return (
    <>
      {inputType === "text" && (
        <input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          {...rest}
          className={styles.input}
          style={{ width: width, height: height }}
        />
      )}
      {inputType === "textarea" && (
        <textarea
          ref={inputRef}
          value={value}
          onChange={handleChange}
          rows={4}
          cols={10}
          {...rest}
          className={styles.input}
          style={{ width: width, height: height, resize: "none" }}
        />
      )}
    </>
  );
};
export default ControlledInput;
