import BgBunga from "../../ornaments/BgBunga";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Gallery.css";
import Img1 from "../../../images/gallery/1-min.jpg";
import Img2 from "../../../images/gallery/2-min.jpg";
import Img3 from "../../../images/gallery/3-min.jpg";
import Img4 from "../../../images/gallery/4-min.jpg";
import Img5 from "../../../images/gallery/5-min.jpg";
import Img6 from "../../../images/gallery/6-min.jpg";
import Img7 from "../../../images/gallery/7-min.jpg";
import Img8 from "../../../images/gallery/8-min.jpg";
import Img9 from "../../../images/gallery/9-min.jpg";
import Img10 from "../../../images/gallery/10-min.jpg";
import Img11 from "../../../images/gallery/11-min.jpg";
import Img12 from "../../../images/gallery/12-min.jpg";
import Img13 from "../../../images/gallery/13-min.jpg";
import Img14 from "../../../images/gallery/14-min.jpg";
import Img15 from "../../../images/gallery/15-min.jpg";
import FadeIn from "../../../utils/Animation/FadeIn";

function Gallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fungsi untuk memuat gambar secara dinamis
    const loadImage = () => {
      const tempImages = [];
      for (let i = 1; i <= 15; i++) {
        tempImages.push({
          id: i,
          src: `Img${i}`,
          alt: `Wedding Gallery ${i}`,
        });
      }
      setImages(tempImages);
    };

    loadImage();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  //
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setActive(props.selectedId);
  }, [props.selectedId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 280);
    };

    const handleOrientationChange = () => {
      setIsMobile(window.matchMedia("(orientation: portrait)").matches);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);
    handleResize();
    handleOrientationChange();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <FadeIn active={active || !isMobile}>
      <div
        id="gallery"
        className={
          props.sampulOpen
            ? "position-relative height100 pt-pb-2rem"
            : "display-none"
        }
      >
        <div className="bg-image layout-settings gap-2rem">
          {props.selectedId && <BgBunga />}
          <h2 className="p-text-script acara-title">Gallery</h2>
          <div className="gallery">
            <LazyLoadImage
              src={images[currentIndex] ? images[currentIndex].src : ""}
              alt={images[currentIndex] ? images[currentIndex].alt : ""}
              effect="blur"
              className="gallery__image"
              onClick={() => setShowModal(true)}
            />

            {showModal && (
              <div className="modal" onClick={() => setShowModal(false)}>
                <LazyLoadImage
                  effect="blur"
                  src={images[currentIndex] ? images[currentIndex].src : ""}
                  alt={images[currentIndex] ? images[currentIndex].alt : ""}
                />
              </div>
            )}

            <div className="thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt=""
                  className={`thumbnail ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="gallery__button gallery__button--left"
            >
              &#8249;
            </button>

            <button
              onClick={handleNext}
              className="gallery__button gallery__button--right"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Gallery;
