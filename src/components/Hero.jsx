import styles from "../styles/Hero.module.css";
import Header from "./Header";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Header />
        <div className={styles.info}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              Nice to meet you! I&apos;m <span>Adam Keyes</span>.
            </h2>
            <p className={styles.description}>
              Based in the UK, I&apos;m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button className={styles.cta}>Contact me</button>
          </div>
          <img
            src="/image-profile-desktop.webp"
            alt="Adam Keyes's profile"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
