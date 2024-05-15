import React from "react";
import "../styles/ProfileData.scss";
import FullStackTitle from "./FullStackTitle";

function ProfileData() {
  return (
    <div className="profile-container">
      <div className="profile-photo">
        <img src="path_to_your_photo.jpg" alt="Foto de Mauricio" />
      </div>
      <div className="profile-content">
        <FullStackTitle />
        <p>
        Mi nombre es Jeizer y soy <span className="p">Desarrollador Full Stack</span>. Cuento con experiencia en diversos proyectos 
        donde he desempeñado el rol de <span className="s">líder de equipo</span>, guiando a mis colegas mediante el uso de metodologías ágiles.
        </p>
        <p>Como desarrollador, comprendo que es fundamental mantenerse actualizado y trabajar de manera eficiente,
        evitando reinventar la rueda. Por ello, mi lema de vida es:</p>
        <p><span className="s">"Máxima eficiencia con el mínimo esfuerzo"</span></p>
        
      </div>
      <div className="cv">
        <button onClick={() => window.open("/Cv.pdf", "_blank")}>
          Ver mi CV
        </button>
      </div>
    </div>
  );
}

export default ProfileData;
