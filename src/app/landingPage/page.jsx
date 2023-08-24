import styles from "./page.module.css";
import scrollDown from "../../../public/img/scroll-down.svg";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import Link from "next/link";

export const metadata = {
  title: "Landing Page",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <section id={styles.home} className="banner">
        <div className="container-fluid">
          <div className={styles.content1}>
            <div className={styles.banner__content}>
              <h1 className={styles.banner__content_h1}>Play Traditional Game</h1>
              <p className={styles.banner__content_p}>Experience new traditional game play</p>
              <div className={styles.btn__jumbotron}>
                <Link className={`${styles.btn__jumbotron_a} btn btn-warning`} href={"/rps"}>
                  <span className={styles.btn__jumbotron_span}>Play Now</span>
                </Link>
              </div>
            </div>

            <div className={styles.story}>
              <p className={styles.story_p}>THE STORY</p>
              <Image className={styles.story_img} src={scrollDown} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
