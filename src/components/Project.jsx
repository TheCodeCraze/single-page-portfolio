import styles from "../styles/Project.module.css";
import PropType from "prop-types";

const Project = ({ image, name, stack }) => {
  return (
    <div className={styles.project}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.stack}>
          {stack.map((stackItem) => (
            <p key={name} className={styles["stack-item"]}>
              {stackItem}
            </p>
          ))}
        </div>
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
