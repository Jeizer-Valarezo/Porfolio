import styles from "../styles/AboutContent.module.scss";

function AboutContent() {
  return (
    <div className={styles["about-me"]}>
      <div className={styles["profile-photo"]}>
        <img src="./JeizerPhoto.png" alt="Foto de Jeizer" />
      </div>
      <p>
        Desde pequeño siempre me gustaron los videojuegos, creo que parte de eso es lo que me impulso a ser programador y cuando estuve durante 6
        meses liderando equipos FullStack en Develhope, supe que esta seria mi vocación de vida.
      </p>
      <p>
        Me gusta meditar, leer libros, jugar ajedrez y escribir canciones en mi tiempo libre, cuando me intereso por un area en especifico 
        mi objetivo es ser el mejor en ella, considero de esa forma es más divertido.
      </p>
      <p>
        Si crees que haríamos un buen equipo, no dudes en contactarme mediante mi correo aquí abajo, y si necesitas más información de contacto,
        en mi CV encontraras información detallada: 
      </p>
      <span className={styles.correo}>nakellava@hotmail.com</span>
    </div>
  );
}

export default AboutContent;
