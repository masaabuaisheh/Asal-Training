import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const itemWidth = 220;
        const totalMargin = 640;

        // Calculate how many slides can fit in the visible area
        const slidesToShow = Math.floor(
          (carouselWidth - totalMargin) / itemWidth
        );
        setItemsPerView(slidesToShow);
      }
    };

    handleResize();
  }, [slides.length]);

  // Handle dot clicks: Update the current slide index when a dot is clicked
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide}
          </div>
        ))}
      </div>
      <div className="dots">
        {Array.from({ length: Math.ceil(slides.length / itemsPerView) }).map(
          (_, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Carousel;
