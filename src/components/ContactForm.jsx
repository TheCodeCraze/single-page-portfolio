import styles from "../styles/ContactForm.module.css";
import { useFormik } from "formik";
import { formSchema } from "../schema/formSchema";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: handleSubmit,
  });

  const nameClass = `${styles.name} ${
    formik.touched.name && formik.errors.name ? styles.error : null
  }`;
  const emailClass = `${styles.email} ${
    formik.touched.email && formik.errors.email ? styles.error : null
  }`;
  const messageClass = `${styles.message} ${
    formik.touched.message && formik.errors.message ? styles.error : null
  }`;

  return (
    <div className={styles["contact-form"]}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.group}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              className={nameClass}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <>
                <span className={styles["error-message"]}>
                  {formik.errors.name}
                </span>
                <img
                  src="/error.png"
                  className={styles["error-image"]}
                  alt="Error occured"
                />
              </>
            )}
          </div>
          <div className={styles.group}>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="email"
              className={emailClass}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <>
                <span className={styles["error-message"]}>
                  {formik.errors.email}
                </span>
                <img
                  src="/error.png"
                  className={styles["error-image"]}
                  alt="Error occured"
                />
              </>
            )}
          </div>
          <div className={styles.group}>
            <textarea
              id="message"
              name="message"
              placeholder="message"
              className={messageClass}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <>
                <span className={styles["error-message"]}>
                  {formik.errors.message}
                </span>
                <img
                  src="/error.png"
                  className={styles["error-image"]}
                  alt="Error occured"
                />
              </>
            )}
          </div>
        </div>
        <button className={styles.button} type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
