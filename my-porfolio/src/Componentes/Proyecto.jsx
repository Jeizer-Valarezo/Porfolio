import AnimatedBorderWrapper from '../animation_styles/AnimatedBorder';
import '../styles/Proyecto.scss';
import PropTypes from 'prop-types';

function Proyecto({clase, nombre, descripcion, foto, github, web}) {
  return (
    
    <div className={`view view-first proyecto  ${clase}`}>
      <AnimatedBorderWrapper>
      <img src={foto} alt={`Imagen de ${nombre}`} />
      <div className="mask">
        <h2 className='__titulo'>{nombre}</h2>
        <p className='__descripcion'>{descripcion}</p>
        <a href={github} className="__info" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={web} className="__info" target="_blank" rel="noopener noreferrer">Web</a>
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