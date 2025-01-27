import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.name}>
          <p>Prime Automations Ltd.</p>
        </div>
        <div className={styles.navlink}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>News</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
