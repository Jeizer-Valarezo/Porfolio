import Proyecto from "./Proyecto";
import "../styles/ProyectList.scss";

function ProjectList() {
  return (
    <div className="project-list">
      <Proyecto className="cardPrincipal"
        nombre="Animal Shelter"
        descripcion="Utilizando tecnologías como React, Vite y TypeScript, 
        desarrollamos un sitio web destinado a la adopción de animales. En este proyecto, que contó 
        con un equipo de cuatro personas, desempeñé el rol de Full Stack Developer.
        Me encargué de la implementación al completo de la API en el Back-End, participé en el diseño y 
        desarrollo del Front-End, incluyendo la creación de las tarjetas de los animales y el diseño general del sitio."
        foto="url_de_la_foto_del_proyecto.jpg"
        github="url_del_repositorio_github"
        web="url_del_sitio_web"
      />
      <Proyecto className="cardSecundaria1"
        nombre="Dashboard Falcon"
        descripcion="Empleando tecnologías como JavaScript, HTML y CSS, desarrollamos un Dashboard para 
        un cliente con el objetivo de gestionar su negocio, mostrando métricas de ventas, productos y clientes. 
        Mi rol en este proyecto fue el de líder de equipo, responsabilizándome de la organización del mismo, 
        la asignación de tareas y la supervisión del cumplimiento de los plazos establecidos. 
        Este proyecto se basa en la página de Falcon Web."
        foto="url_de_la_foto_del_proyecto.jpg"
        github="url_del_repositorio_github"
        web="url_del_sitio_web"
      />
      <Proyecto className="cardSecundaria2"
        nombre="Animal Shelter"
        descripcion="Utilizando tecnologías como React, Vite y TypeScript, 
        desarrollamos un sitio web destinado a la adopción de animales. En este proyecto, que contó 
        con un equipo de cuatro personas, desempeñé el rol de Full Stack Developer.
        Me encargué de la implementación al completo de la API en el Back-End, participé en el diseño y 
        desarrollo del Front-End, incluyendo la creación de las tarjetas de los animales y el diseño general del sitio."
        foto="url_de_la_foto_del_proyecto.jpg"
        github="url_del_repositorio_github"
        web="url_del_sitio_web"
      />
    </div>
  );
}

export default ProjectList;
