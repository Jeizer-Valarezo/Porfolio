import AnimatedBorderWrapper from '../animation_styles/AnimatedBorder';
import styles from '../styles/Proyecto.module.scss';
import PropTypes from 'prop-types';

function Proyecto({clase, nombre, descripcion, foto, github, web}) {
  const descriptionLines = descripcion.split('<br>').map((line, index) => (
    <div key={index}>{line}</div>
  ));

  return (
    <div className={`${styles.view} ${styles['view-first']} proyecto ${clase}`}>
      <AnimatedBorderWrapper>
        <img src={foto} alt={`Imagen de ${nombre}`} />
        <div className={styles.mask}>
          <h2 className={styles.__titulo}>{nombre}</h2>
          <div className={styles.__descripcion}>{descriptionLines}</div>
          <a href={github} className={styles.__info} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={web} className={styles.__info} target="_blank" rel="noopener noreferrer">Web</a>
        </div>
      </AnimatedBorderWrapper>
    </div>
  )
}

Proyecto.propTypes = {
  clase: PropTypes.string,
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  foto: PropTypes.string,
  github: PropTypes.string,
  web: PropTypes.string
};

export default Proyecto
