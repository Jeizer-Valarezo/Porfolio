import { useState, useEffect } from "react";
import styles from "../styles/Slider.module.scss";
import imageS1 from "./assets/Project1.webp";
import imageS2 from "./assets/Project2.webp";
import imageS3 from "./assets/Project3.webp";
import AnimatedBorderWrapper from "../animation_styles/AnimatedBorder";


function Slider() {
  const [activeImage, setActiveImage] = useState("S1");
  const imageIds = ["S1", "S2", "S3"];
  const images = {
    S1: imageS1,
    S2: imageS2,
    S3: imageS3,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((currentImage) => {
        const currentIndex = imageIds.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % imageIds.length;
        return imageIds[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e, imageId) => {
    e.preventDefault();
    setActiveImage(imageId);
  };

  return (
    <AnimatedBorderWrapper>
      <div className={styles.sliderWrapper}>
        <div className={styles["slider-images"]}>
          {imageIds.map(id => (
            <img
              key={id}
              id={id}
              src={images[id]}
              alt={`Imagen ${id}`}
              className={activeImage === id ? styles.active : ""}
              style={{ display: activeImage === id ? "block" : "none" }}
            />
          ))}
        </div>
        <div className={styles["slider-nav"]}>
          {imageIds.map(id => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)}></a>
          ))}
        </div>
      </div>
    </AnimatedBorderWrapper>
  );

}

export default Slider;
