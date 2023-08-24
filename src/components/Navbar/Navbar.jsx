import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.bg__custom} navbar navbar-expand-lg navbar-dark`}>
      <div className="container">
        <a href="#" className={`${styles.logo} navbar-brand`}>
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigatiion">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`${styles["navbar__ul"]} navbar-nav`}>
            <li className="nav-item">
              <a className={`${styles["link"]} nav-link`} href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles["link"]} nav-link`} href="#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles["link"]} nav-link`} href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles["link"]} nav-link`} href="#">
                About Me
              </a>
            </li>
          </ul>
          <ul className={`${styles["navbar__ul"]} navbar-nav ms-auto`}>
            <li className="nav-item px-0">
              <Link href={"/register"} className={`${styles["link"]} nav-link`}>
                Sign in
              </Link>
            </li>
            <li className="nav-item px-0">
              <a className={`${styles["link"]} nav-link`} href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
