import styles from "../styles/Skills.module.css";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles["skills-container"]}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skill}>
            <h3 className={styles["skill-name"]}>{skill.name}</h3>
            <p className={styles["skill-exp"]}>{skill.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
