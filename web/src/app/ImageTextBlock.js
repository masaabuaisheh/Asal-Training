import React from "react";
import Image from 'next/image'

function ImageTextBlock({ text, img, reverse }) {
  console.log("Image source:", img);
  return (
    <div className={`image-text-block ${reverse ? "reverse" : ""}`}>
      {/*<img src={img} alt="placeholder" />*/}
      <Image
      src={img}
      alt="Unnamed Picture"
      width={800}
      height={500}
    />
      <p>{text}</p>
    </div>
  );
}

export default ImageTextBlock;
