import React, { useEffect, useRef } from "react";

interface DragCarouselProps {
  dragImages: JSX.Element[];
}

const DragCarousel: React.FC<DragCarouselProps> = ({ dragImages }) => {
  const slider = useRef<HTMLDivElement | null>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number | null>(null);
  const scrollLeft = useRef<number | null>(null);
  const scrollSpeed = 0.5;

  // Duplicate the images for looping effect
  const items = [...dragImages, ...dragImages];

  useEffect(() => {
    const sliderRef = slider.current;

    if (sliderRef) {
      const onMouseDown = (e: MouseEvent) => {
        isDown.current = true;
        // Calculates the initial X position of the mouse relative to the carousel
        startX.current = e.pageX - sliderRef.offsetLeft;
        scrollLeft.current = sliderRef.scrollLeft;
      };

      // Handles when the mouse leaves the carousel area, stopping the dragging
      const onMouseLeave = () => {
        isDown.current = false;
      };

      const onMouseUp = () => {
        isDown.current = false;
      };

      const onMouseMove = (e: MouseEvent) => {
        if (
          !isDown.current ||
          startX.current === null ||
          scrollLeft.current === null
        )
          return;
        e.preventDefault();
        const x = e.pageX - sliderRef.offsetLeft;
        const walk = x - (startX.current || 0);
        sliderRef.scrollLeft = (scrollLeft.current || 0) - walk * scrollSpeed;
      };

      sliderRef.addEventListener("mousedown", onMouseDown);
      sliderRef.addEventListener("mouseleave", onMouseLeave);
      sliderRef.addEventListener("mouseup", onMouseUp);
      sliderRef.addEventListener("mousemove", onMouseMove);

      return () => {
        sliderRef.removeEventListener("mousedown", onMouseDown);
        sliderRef.removeEventListener("mouseleave", onMouseLeave);
        sliderRef.removeEventListener("mouseup", onMouseUp);
        sliderRef.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  return (
    <div className="drag-carousel" ref={slider}>
      {items.map((item, index) => (
        <div className="slide-image-content" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragCarousel;
