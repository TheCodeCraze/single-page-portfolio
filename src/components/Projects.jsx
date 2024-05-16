import styles from "../styles/Projects.module.css";
import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.top}>
        <h2 className={styles.title}>Projects</h2>
        <button className={styles.cta}>Contact me</button>
      </div>
      <div className={styles.bottom}>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
