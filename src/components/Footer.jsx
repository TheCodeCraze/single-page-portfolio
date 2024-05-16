import styles from "../styles/Footer.module.css";
import ContactForm from "./ContactForm";
import Header from "./Header";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactForm />
      <hr className={styles.line} />
      <Header inHero={false} />
    </footer>
  );
};

export default Footer;
