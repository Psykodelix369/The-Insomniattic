import styles from "./Starfield.module.css";

export default function Starfield() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.layer} ${styles.setA}`} />
      <div className={`${styles.layer} ${styles.setB}`} />
      <div className={`${styles.layer} ${styles.setC}`} />
    </div>
  );
}