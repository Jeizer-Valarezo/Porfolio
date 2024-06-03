import PropTypes from 'prop-types';
import styles from "../styles/SocialButtons.module.scss";

export function SocialButtonsHover() {
  return (
    <>
        <LinkedinLink  />
        <GithubLink  />
        <FileLink  />
        <GlobeLink  />
    </>
  )
}

export function LinkedinLink({ link = "https://www.linkedin.com/in/jeizer-valarezo-21ba05280/" }) {
  return (
    <a href={link} target="_blank"><i className={styles.linkedin + " fa-brands fa-linkedin"}></i></a>
  );
}

LinkedinLink.propTypes = {
  link: PropTypes.string
};

export function GithubLink({ link = "https://github.com/Jeizer-Valarezo" }) {
  return (
    <a href={link} target="_blank"><i className={styles.github + " fa-brands fa-github"}></i></a>
  );
}

GithubLink.propTypes = {
  link: PropTypes.string
};

export function FileLink({ link = "/Cv.pdf" }) {
  return (
    <a href={link} target="_blank"><i className={styles.file + " fa-solid fa-file"}></i>
    </a>
  );
}

FileLink.propTypes = {
  link: PropTypes.string
};

export function GlobeLink({ link = "https://porfolio-jeizer-valarezos-projects.vercel.app/" }) {
  return (
    <a href={link} target="_blank"><i className={styles.globe + " fa-solid fa-globe"}></i></a>
  );
}

GlobeLink.propTypes = {
  link: PropTypes.string
};