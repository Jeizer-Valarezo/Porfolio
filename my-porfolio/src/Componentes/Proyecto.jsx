import '../styles/Proyecto.scss';

function Proyecto({className, nombre, descripcion, foto, github, web}) {
  return (
    <div className={`proyecto ${className}`}>
      <img src={foto} alt={`Imagen de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <div className="botones">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={web} target="_blank" rel="noopener noreferrer">Web</a>
      </div>
    </div>
  )
}

export default Proyecto