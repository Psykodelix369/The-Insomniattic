import styles from "./Starfield.module.css";

export default function Starfield() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.layer} />
      <div className={styles.layer2} />
    </div>
  );
}
