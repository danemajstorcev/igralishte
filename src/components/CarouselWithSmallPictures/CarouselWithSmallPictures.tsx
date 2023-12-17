import { useState } from "react";
import "./CarouselWithSmallPictures.scss";

interface CarouselWithSmallPicturesProps {
  images: string[];
}

const CarouselWithSmallPictures = ({
  images,
}: CarouselWithSmallPicturesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-with-small-pics">
      <div className="slide-wrapper">
        <img src={images[currentSlide]} alt="" />
      </div>
      <div className="carousel-buttons">
        <img
          src="/pictures/material-symbols_arrow-back-ios-rounded-left.png"
          alt=""
          onClick={prevSlide}
          className="carousel-button"
        />
        <div className="small-images-wrapper">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <img
          src="/pictures/material-symbols_arrow-back-ios-rounded-right.png"
          alt=""
          onClick={nextSlide}
          className="carousel-button"
        />
      </div>
    </div>
  );
};

export default CarouselWithSmallPictures;
