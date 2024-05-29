import styles from "../styles/TitulosSecciones.module.scss";
import PropTypes from 'prop-types';

function TitulosSecciones({titulo}) {
  return (
    <div className={styles.tituloSeccion}>
      <div className={styles.top}>{titulo}</div>
      <div className={styles.bottom} aria-hidden="true">
      {titulo}
      </div>
    </div>
  );
}

TitulosSecciones.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default TitulosSecciones;
