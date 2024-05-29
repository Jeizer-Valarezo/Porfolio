import styles from "../styles/FullStackTitle.module.scss";

function FullStackTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.letras + " " + styles.invert}>
        <span className={styles["titulo-principal"]} data-text="Full Stack Developer"></span>
        <span className={styles["nombre-desarrollador"]} data-text="Jeizer Valarezo"></span>
      </div>
    </div>
  );
}

export default FullStackTitle;
