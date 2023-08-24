import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/rps/logo.png";
import styles from "./navbar.module.css";

const NavbarRPS = () => {
  return (
    <nav className="navbar navbar-light">
      <div className={`${styles.custom1} container-fluid`}>
        <Link href={"/landingPage"} className="navbar-brand">
          {" "}
          <span className={styles.link__logo}> &lt; </span>{" "}
        </Link>
        <Image className={styles.navbar_img} src={logo} alt="logo" />
        <h1 className={styles.navbar_h1}>rock paper scissors</h1>
      </div>
    </nav>
  );
};

export default NavbarRPS;
