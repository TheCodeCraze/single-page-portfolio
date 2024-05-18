import styles from "../styles/Footer.module.css";
import ContactForm from "./ContactForm";
import Header from "./Header";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <ContactForm />
        <hr className={styles.line} />
        <Header inHero={false} />
      </div>
    </footer>
  );
};

export default Footer;
