import React from 'react';
import '../styles/ProfileData.scss';

function ProfileData() {
  return (
    <div className="profile-container">
      <div className="profile-photo">
        <img src="path_to_your_photo.jpg" alt="Foto de Mauricio" />
      </div>
      <div className="profile-content">
        <h1>Mauricio Con Peso</h1>
        <h2>Full Stack Developer</h2>
        <p>Soy un apasionado por la tecnología y por los porros, pero más por los porros.</p>
        <p>"MÁXIMA EFICIENCIA, MÍNIMO ESFUERZO"</p>
      </div>
      <div className="cv">
        <button onClick={() => window.open("/Cv.pdf", "_blank")}>Ver mi CV</button>
      </div>
    </div>
  );
}

export default ProfileData;