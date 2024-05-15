import "./App.scss";
import Slider from "./Componentes/Slider";
import ProfileData from "./Componentes/ProfileData";
import ProjectList from "./Componentes/ProjectList";
import AboutContent from "./Componentes/AboutContent";
import SkillsList from "./Componentes/SkillsList";
import ContactInfo from "./Componentes/ContactInfo";
import TitulosSecciones from "./Componentes/TitulosSecciones";

function App() {
  return (
    <div className="App">
      <div className="content">
        <section className="slider">
          <Slider />
        </section>
        <section className="profile">
          <ProfileData />
        </section>
        <section className="projects">
          <TitulosSecciones titulo="Proyectos" />
          <ProjectList />
        </section>
        <section className="about">
        <TitulosSecciones titulo="Sobre mi" />
          <AboutContent />
        </section>
        <section className="skills">
          <TitulosSecciones titulo="Tecnologias"/>
          <SkillsList />
        </section>
        <footer>
          <ContactInfo />
        </footer>
      </div>
    </div>
  );
}

export default App;
