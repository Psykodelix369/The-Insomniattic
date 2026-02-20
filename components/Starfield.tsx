import styles from "./Starfield.module.css";

export default function Starfield() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      {/* Crisp / slightly brighter */}
      <div className={`${styles.layer} ${styles.setA} ${styles.crisp}`} />

      {/* Hazy / blurred aura */}
      <div className={`${styles.layer} ${styles.setB} ${styles.hazy}`} />
      <div className={`${styles.layer} ${styles.setC} ${styles.hazy}`} />
    </div>
  );
}