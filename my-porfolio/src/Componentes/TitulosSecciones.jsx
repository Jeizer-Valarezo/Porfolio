import "../styles/TitulosSecciones.scss";

function TitulosSecciones({titulo}) {
  return (
    <div className="wrapper">
      <div className="top">{titulo}</div>
      <div className="bottom" aria-hidden="true">
      {titulo}
      </div>
    </div>
  );
}

export default TitulosSecciones;
