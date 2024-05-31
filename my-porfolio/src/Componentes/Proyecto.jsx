import AnimatedBorderWrapper from "../animation_styles/AnimatedBorder";
import { GithubLink, GlobeLink } from "../animation_styles/SocialButtons";
import styles from "../styles/Proyecto.module.scss";
import PropTypes from "prop-types";

function Proyecto({ clase, nombre, children, foto, github, web }) {
  return (
    <div className={`${styles.view} ${styles["view-first"]} proyecto ${clase}`}>
      <AnimatedBorderWrapper>
        <img src={foto} alt={`Imagen de ${nombre}`} />
        <div className={styles.mask}>
          <h2 className={styles.__titulo}>{nombre}</h2>
          <div className={styles.__descripcion}>{children}</div>
          <div className={styles.__info}>
            <GlobeLink link={web} />
            <GithubLink link={github} />
          </div>
        </div>
      </AnimatedBorderWrapper>
    </div>
  );
}

Proyecto.propTypes = {
  clase: PropTypes.string,
  nombre: PropTypes.string,
  children: PropTypes.node,
  foto: PropTypes.string,
  github: PropTypes.string,
  web: PropTypes.string,
};

export default Proyecto;
