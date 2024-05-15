import styles from "../styles/Hero.module.css";
import Header from "./Header";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Nice to meet you! I&apos;m <span>Adam Keyes</span>.
          </h2>
          <p className={styles.description}>
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <a className={styles.cta} href="#">
            Contact me
          </a>
        </div>
        <img
          src="/image-profile-desktop.webp"
          alt="Adam Keyes's profile"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
