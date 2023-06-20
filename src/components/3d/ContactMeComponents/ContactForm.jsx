import { Html } from "@react-three/drei";

import styles from "./styles.module.scss";
import { useFormik } from "formik";

const ContactForm = ({ setHtmlClicked }) => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <Html className={styles.content} transform sprite occlude>
      <div
        className={styles.wrapper}
        onClick={(e) => {
          e.stopPropagation();
          setHtmlClicked(true);
        }}
      >
        <form autoComplete="off" className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            className={styles.input}
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            className={styles.input}
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            className={styles.textarea}
            value={values.message}
            placeholder="Enter your message"
            onChange={handleChange}
            name="message"
            id="message"
            maxLength="500"
            cols={500}
            rows={15}
          />
        </form>
      </div>
    </Html>
  );
};
export default ContactForm;
