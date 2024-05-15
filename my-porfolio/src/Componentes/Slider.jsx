import React, { useState, useEffect } from 'react';
import "../styles/Slider.scss";
import imageS1 from './assets/Project1.webp';
import imageS2 from './assets/Project2.webp';
import imageS3 from './assets/Project3.webp';

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
            setActiveImage(currentImage => {
                const currentIndex = imageIds.indexOf(currentImage);
                const nextIndex = (currentIndex + 1) % imageIds.length;
                return imageIds[nextIndex];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNavClick = (e, imageId) => {
        e.preventDefault();
        setActiveImage(imageId);
    };

    return (
        
            <div className="sliderWrapper">
                <div className="slider-images">
                    {imageIds.map(id => (
                        <img
                            key={id}
                            id={id}
                            src={images[id]}
                            alt={`Imagen ${id}`}
                            className={activeImage === id ? "active" : ""}
                            style={{ display: activeImage === id ? "block" : "none" }}
                        />
                    ))}
                </div>
                <div className="slider-nav">
                    {imageIds.map(id => (
                        <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)}></a>
                    ))}
                </div>
            </div>
        
    );
}

export default Slider;