import styles from '../styles/AnimatedBorder.module.scss';


// eslint-disable-next-line react/prop-types
const AnimatedBorderWrapper = ({ children }) => {
  return <div className={styles["animated-border"]}>{children}</div>;
};

export default AnimatedBorderWrapper;