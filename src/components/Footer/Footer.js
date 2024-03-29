import styles from './Footer.module.css';
import MenuList from "../MenuList/MenuList";

// Functional component with Anonymous Function
const Footer = function () {
  const copyrightYear = 2023;
  
  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyrightYear} | Arun</p>
      <p className={styles.borderRed}>App Built During React Training</p>
    </footer>
  );
};

export default Footer;
