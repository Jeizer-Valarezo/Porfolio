import "./App.scss";
import Slider from "./Componentes/Slider";
import ProfileData from "./Componentes/ProfileData";
import ProjectList from "./Componentes/ProjectList";
import AboutContent from "./Componentes/AboutContent";
import SkillsList from "./Componentes/SkillsList";
import ContactInfo from "./Componentes/ContactInfo";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>
          <Slider />
        </header>
        <section className="profile">
          <ProfileData />
        </section>
        <section className="projects">
          <h2>Proyectos</h2>
          <ProjectList />
        </section>
        <section className="about">
          <h2>Sobre mí</h2>
          <AboutContent />
        </section>
        <section className="skills">
          <h2>Tecnologías</h2>
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
