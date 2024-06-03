import PropTypes from 'prop-types';
import styles from '../styles/SkillsList.module.scss';
import HTML5Icon from "./assets/Html5.svg";
import CSSIcon from "./assets/CSS3.svg";
import JSIcon from "./assets/brand-javascript.svg";
import ReactIcon from "./assets/brand-react.svg";
import SassIcon from "./assets/brand-sass.svg";
import FigmaIcon from "./assets/brand-figma.svg";
import ReduxIcon from "./assets/brand-redux.svg";
import TypeScriptIcon from "./assets/brand-typescript.svg";
import AngularIcon from "./assets/brand-angular.svg";
import NodeJSIcon from "./assets/brand-nodejs.svg";
import MySQLIcon from "./assets/brand-mysql.svg";
import NetBeansIcon from "./assets/brand-netbeans.svg";
import PythonIcon from "./assets/brand-python.svg";
import CloudIcon from "./assets/brand-onedrive.svg";
import NextJSIcon from "./assets/brand-nextjs.svg";
import MongoDBIcon from "./assets/brand-mongodb.svg";
import AstroIcon from "./assets/brand-astro.svg";
import DockerIcon from "./assets/brand-docker.svg";
import PHPIcon from "./assets/brand-php.svg";
import UnityIcon from "./assets/brand-unity.svg";
import GitIcon from "./assets/brand-git.svg";
import GitHubIcon from "./assets/brand-github.svg";
import TerminalIcon from "./assets/terminal-2.svg";
import LinuxIcon from "./assets/brand-ubuntu.svg";
import VSCodeIcon from "./assets/brand-vscode.svg";
import NpmIcon from "./assets/brand-npm.svg";
import WordPressIcon from "./assets/brand-wordpress.svg";

const skillsData = [
  {
    title: 'FrontEnd',
    icons: [
      { src: HTML5Icon, alt: 'HTML', text: 'HTML' },
      { src: CSSIcon, alt: 'CSS', text: 'CSS' },
      { src: JSIcon, alt: 'JavaScript', text: 'JavaScript' },
      { src: ReactIcon, alt: 'React', text: 'React' },
      { src: SassIcon, alt: 'Sass', text: 'Sass' },
      { src: FigmaIcon, alt: 'Figma', text: 'Figma' },
      { src: ReduxIcon, alt: 'Redux', text: 'Redux' },
      { src: TypeScriptIcon, alt: 'TypeScript', text: 'TypeScript' },
      { src: AngularIcon, alt: 'Angular', text: 'Angular' },
    ]
  },
  {
    title: 'BackEnd',
    icons: [
      { src: NodeJSIcon, alt: 'NodeJS', text: 'NodeJS' },
      { src: MySQLIcon, alt: 'MySQL', text: 'MySQL' },
      { src: NetBeansIcon, alt: 'NetBeans', text: 'NetBeans' },
      { src: PythonIcon, alt: 'Python', text: 'Python' },
      { src: CloudIcon, alt: 'Google Cloud', text: 'Google Cloud' },
    ]
  },
  {
    title: 'Aprendiendo',
    icons: [
      { src: NextJSIcon, alt: 'Next.js', text: 'Next.js' },
      { src: MongoDBIcon, alt: 'MongoDB', text: 'MongoDB' },
      { src: AstroIcon, alt: 'Astro', text: 'Astro' },
      { src: DockerIcon, alt: 'Docker', text: 'Docker' },
      { src: PHPIcon, alt: 'PHP', text: 'PHP' },
      { src: UnityIcon, alt: 'Unity', text: 'Unity' },
    ]
  },
  {
    title: 'Herramientas',
    icons: [
      { src: GitIcon, alt: 'Git', text: 'Git' },
      { src: GitHubIcon, alt: 'GitHub', text: 'GitHub' },
      { src: TerminalIcon, alt: 'Terminal', text: 'Terminal' },
      { src: LinuxIcon, alt: 'Linux', text: 'Linux' },
      { src: VSCodeIcon, alt: 'VSCode', text: 'VSCode' },
      { src: NpmIcon, alt: 'npm', text: 'npm' },
      { src: WordPressIcon, alt: 'WordPress', text: 'WordPress' },
    ]
  },
];

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function Icon({ src, alt, text }) {
  return (
    <div className={styles.icon}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
}

function SkillsList() {
  return (
    <div className={styles["skills-list"]}>
      {skillsData.map((skill, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.title}>{skill.title}</h3>
          <div className={styles.icons}>
            {skill.icons.map((icon, index) => (
              <Icon key={index} src={icon.src} alt={icon.alt} text={icon.text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
