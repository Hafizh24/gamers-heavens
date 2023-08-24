import styles from "./styles.module.css";

export default function RPSLayout({ children }) {
  return <body className={styles.body}>{children}</body>;
}
