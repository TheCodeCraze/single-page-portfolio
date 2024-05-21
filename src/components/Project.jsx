import styles from "../styles/Project.module.css";
import PropType from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Project = ({ image, name, stack }) => {
  return (
    <div className={styles.project}>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles["image-overlay"]}>
          <div className={styles["overlay-links"]}>
            <a className={styles.link} href="#">
              view project
            </a>
            <a className={styles.link} href="#">
              view code
            </a>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.stack}>
          {stack.map((stackItem) => (
            <p key={uuidv4()} className={styles["stack-item"]}>
              {stackItem}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="#">
          view project
        </a>
        <a className={styles.link} href="#">
          view code
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropType.string.isRequired,
  name: PropType.string.isRequired,
  stack: PropType.array.isRequired,
};

export default Project;
