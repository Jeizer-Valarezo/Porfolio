import Proyecto from "./Proyecto";
import "../styles/ProyectList.scss";

import imageS1 from "./assets/Project1.webp";
import imageS2 from "./assets/Project2.webp";
import imageS3 from "./assets/Project3.webp";

function ProjectList() {
  return (
    <div className="project-list">
      <Proyecto
        clase="cardPrincipal "
        nombre="Animal Shelter"
        foto={imageS1}
        github="https://github.com/tommysoeder/Pet-Shop"
        web="https://pet-shop-813q.vercel.app/"
      >
        <p>
          Utilizando tecnologías de vanguardia como React, Vite y TypeScript,
          desarrollamos un sitio web innovador destinado a la adopción de
          animales. Este proyecto, en el que trabajé como Full Stack Developer
          junto a un equipo de cuatro talentosos profesionales, me permitió
          poner en práctica y expandir mis habilidades técnicas y de
          colaboración.
        </p>
        <br />
        <p>
          En el ámbito del Back-End, me encargué de la implementación completa
          de la API, asegurando una comunicación fluida y eficiente entre el
          servidor y el cliente. Esto implicó la configuración de rutas, la
          gestión de peticiones y la manipulación de datos para ofrecer una
          experiencia de usuario robusta y confiable.
        </p>
        <br />
        <p>
          En el Front-End, participé activamente en el diseño y desarrollo del
          sitio. Una de mis contribuciones más destacadas fue la creación de
          tarjetas interactivas para los animales, que no solo muestran
          información relevante y atractiva, sino que también permiten a los
          usuarios interactuar con el contenido de manera intuitiva. Además,
          colaboré en el diseño general del sitio, asegurando que la interfaz
          fuera visualmente agradable, fácil de navegar y coherente con la
          misión del proyecto.
        </p>
        <br />
        <p>
          Este proyecto no solo demostró mi capacidad para manejar tanto el
          desarrollo front-end como el back-end, sino que también subrayó mi
          habilidad para trabajar en equipo, comunicarme efectivamente y
          entregar soluciones de alta calidad en un entorno dinámico. Estoy
          emocionado de llevar estas habilidades a futuros desafíos y contribuir
          al éxito de nuevos proyectos.
        </p>
      </Proyecto>
      <Proyecto
        clase="cardSecundaria1"
        nombre="Dashboard Falcon"
        foto={imageS2}
        github="url_del_repositorio_github"
        web="url_del_sitio_web"
      >
        <p>
          Empleando tecnologías como JavaScript, HTML y CSS, desarrollamos un
          Dashboard para un cliente con el objetivo de gestionar su negocio,
          mostrando métricas de ventas, productos y clientes. Mi rol en este
          proyecto fue el de líder de equipo, responsabilizándome de la
          organización, la asignación de tareas y la supervisión del
          cumplimiento de los plazos. Este proyecto se basa en la página de
          Falcon Web.
        </p>
      </Proyecto>
      <Proyecto
        clase="cardSecundaria2 "
        nombre="Nintendo clone"
        foto={imageS3}
        github="url_del_repositorio_github"
        web="url_del_sitio_web"
      >
        Utilizando los fundamentos de las páginas web con HTML5 y CSS, desde su
        modo pc a su versión para teléfono se recreó estupendamente la página
        web de Nintendo.
      </Proyecto>
    </div>
  );
}

export default ProjectList;
