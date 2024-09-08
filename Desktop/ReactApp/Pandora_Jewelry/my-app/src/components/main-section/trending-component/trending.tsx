import React, { useState } from "react";

const braceletImages = [
  {
    id: "silver",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw499480b5/productimages/singlepackshot/590719_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "silver",
    price: "$70.00",
  },
  {
    id: "rose-gold",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw082d68bc/productimages/singlepackshot/583050C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#ffc6a3",
    price: "$200.00",
  },
  {
    id: "gold",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw51de017d/productimages/singlepackshot/559522C00_RGB.jpg?sw=900&amp;sh=900&amp;sm=fit&amp;sfrm=png&amp;bgcolor=F5F5F5",
    color: "#eddd9d",
    price: "$2,350.00",
  },
  {
    id: "gold-plated",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw24e9b053/productimages/singlepackshot/563050C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#ecdb9a",
    price: "$200.00",
  },
  {
    id: "two-tone1",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwc7d3df94/productimages/singlepackshot/568707C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#e9e0b9",
    price: "$115.00",
  },
  {
    id: "two-tone2",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw558386ea/productimages/singlepackshot/580719_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#e5dcb9",
    price: "$115.00",
  },
];

const Trending = () => {
  const [activeImage, setActiveImage] = useState(braceletImages[0].src);
  const [price, setPrice] = useState(braceletImages[0].price);

  const handleMouseOver = (imageSrc: string, imagePrice: string) => {
    setActiveImage(imageSrc);
    setPrice(imagePrice);
  };

  return (
    <div className="trending-section">
      <div className="first-product-bracelet">
        <div className="main-image-bracelet">
          <img src={activeImage} alt="Main Bracelet" className="main-img" />
        </div>
        <div className="color-options">
          {braceletImages.map(({ id, color, src, price }) => (
            <div
              key={id}
              className="circle"
              style={{ backgroundColor: color }}
              onMouseOver={() => handleMouseOver(src, price)}
            />
          ))}
        </div>
        <div className="bracelet-details">
          <p className="best-seller-bracelet">BEST SELLER</p>
          <p className="bracelet-text">
            Pandora Moments Heart Clasp Snake Chain Bracelet
          </p>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
