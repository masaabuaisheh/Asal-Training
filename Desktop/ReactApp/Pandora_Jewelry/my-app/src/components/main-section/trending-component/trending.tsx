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

const charmImages = [
  {
    id: "silver",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwda9663d4/productimages/singlepackshot/798761C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "silver",
    price: "$45.00",
  },
  {
    id: "rose-gold",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe4871064/productimages/singlepackshot/788761C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#ffc6a3",
    price: "$65.00",
  },
  {
    id: "gold-plated",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwecc533d4/productimages/singlepackshot/768761C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#ecdb9a",
    price: "$70.00",
  },
];

const hoopEarringsImages = [
  {
    id: "silver",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwb07f9e4b/productimages/singlepackshot/293286C00_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "silver",
    price: "$50.00",
  },
  {
    id: "gold-plated",
    src: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4e5bfc67/productimages/singlepackshot/263286C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
    color: "#ecdb9a",
    price: "$75.00",
  },
];

const Trending = () => {
  const [activeImage, setActiveImage] = useState(braceletImages[0].src);
  const [price, setPrice] = useState(braceletImages[0].price);
  const [activeImageCharm, setActiveImageCharm] = useState(charmImages[0].src);
  const [priceCharm, setPriceCharm] = useState(charmImages[0].price);
  const [activeImageEarrings, setActiveImageEarrings] = useState(
    charmImages[0].src
  );
  const [priceEarrings, setPriceEarrings] = useState(charmImages[0].price);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const slideCount = 10;

  const handleMouseOver = (imageSrc: string, imagePrice: string) => {
    setActiveImage(imageSrc);
    setPrice(imagePrice);
  };

  const handleMouseOverCharm = (imageSrc: string, imagePrice: string) => {
    setActiveImageCharm(imageSrc);
    setPriceCharm(imagePrice);
  };

  const handleMouseOverEarrings = (imageSrc: string, imagePrice: string) => {
    setActiveImageEarrings(imageSrc);
    setPriceEarrings(imagePrice);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 ) % (slideCount - slidesToShow + 1)
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % (slideCount - slidesToShow + 1));
  };

  return (
    <div className="trending-section">
      <h2 className="trending-text">TRENDING NOW</h2>
      <div className="slideshow-container">
        <div
          className="trending-product-section"
          style={{
            transform: `translateX(-${
              (currentSlide % (slideCount - slidesToShow + 1)) *
              (100 / slidesToShow)
            }%)`,
          }}
        >
          {/* Slide 1: Bracelet */}
          <div className="slide">
            <div className="first-product-bracelet">
              <div className="main-image-bracelet">
                <img
                  src={activeImage}
                  alt="Main Bracelet"
                  className="main-img"
                />
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

          {/* Slide 2: Charm */}
          <div className="slide">
            <div className="second-product-charm">
              <div className="main-image-charm">
                <img
                  src={activeImageCharm}
                  alt="Main Charm"
                  className="main-img"
                />
              </div>
              <div className="color-options">
                {charmImages.map(({ id, color, src, price }) => (
                  <div
                    key={id}
                    className="circle"
                    style={{ backgroundColor: color }}
                    onMouseOver={() => handleMouseOverCharm(src, price)}
                  />
                ))}
              </div>
              <div className="charm-details">
                <p className="online-text">engravable online</p>
                <p className="best-seller-charm">BEST SELLER</p>
                <p className="charm-text">Engravable Heart Tag Dangle Charm</p>
              </div>
              <div className="price">
                <p>{priceCharm}</p>
              </div>
            </div>
          </div>

          {/* Slide 3: Crown Ring */}
          <div className="slide">
            <div className="third-product-crown-ring">
              <div className="main-image-crown-ring">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw01fe316e/productimages/singlepackshot/162969C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Crown Ring"
                  className="main-img"
                />
              </div>
              <div className="crown-ring-details">
                <p className="best-seller-crown-ring">BEST SELLER</p>
                <p className="crown-ring-text">
                  Game of Thrones House of the Dragon Crown Ring
                </p>
              </div>
              <div className="price">
                <p>$100.00</p>
              </div>
            </div>
          </div>

          {/* Slide 4: Sparkling Ring */}
          <div className="slide">
            <div className="fourth-product-sparkling-ring">
              <div className="main-image-sparkling-ring">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw1ce8558d/productimages/singlepackshot/192968C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Sparkling Ring"
                  className="main-img"
                />
              </div>
              <div className="sparkling-ring-details">
                <p className="best-seller-sparkling-ring">BEST SELLER</p>
                <p className="sparkling-ring-text">
                  Game of Thrones Dragon Sparkling Ring
                </p>
              </div>
              <div className="price">
                <p>$75.00</p>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="slide">
            <div className="fifth-product-moon-ring">
              <div className="main-image-moon-ring">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwd5beb7b4/productimages/singlepackshot/NAMPS0438.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Moon Ring"
                  className="main-img"
                />
              </div>
              <div className="moon-ring-details">
                <p className="best-seller-moon-ring">BEST SELLER</p>
                <p className="moon-ring-text">Celestial Sun & Moon Ring Set </p>
              </div>
              <div className="price">
                <p>$145.00</p>
              </div>
            </div>
          </div>

          {/* Slide 6 */}
          <div className="slide">
            <div className="sixth-product-necklace">
              <div className="main-image-necklace">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw71ee317b/productimages/singlepackshot/NAMPS0437.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Necklace"
                  className="main-img"
                />
              </div>
              <div className="necklace-details">
                <p className="best-seller-necklace">BEST SELLER</p>
                <p className="necklace-text">Celestial Sun & Moon Ring Set </p>
              </div>
              <div className="price">
                <p>$125.00</p>
              </div>
            </div>
          </div>

          {/* Slide 7 */}
          <div className="slide">
            <div className="seventh-product-earrings">
              <div className="main-image-earrings">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw2c8b28bf/productimages/singlepackshot/293219C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Earrings"
                  className="main-img"
                />
              </div>
              <div className="earrings-details">
                <p className="best-seller-earrings">BEST SELLER</p>
                <p className="earrings-text">
                  Disney Mickey Mouse & Minnie Mouse Sparkling Stud Earrings
                </p>
              </div>
              <div className="price">
                <p>$75.00</p>
              </div>
            </div>
          </div>

          {/* Slide 8 */}
          <div className="slide">
            <div className="eight-product-dangle-charm">
              <div className="main-image-dangle-charm">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwbc1f4577/productimages/singlepackshot/793031C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Dangle Charm"
                  className="main-img"
                />
              </div>
              <div className="dangle-charm-details">
                <p className="dangle-charm-text">
                  Disney Mickey Mouse Sparkling Head Silhouette Dangle Charm{" "}
                </p>
              </div>
              <div className="price">
                <p>$70.00</p>
              </div>
            </div>
          </div>

          {/* Slide 9 */}
          <div className="slide">
            <div className="nine-product-heart-ring">
              <div className="main-image-heart-ring">
                <img
                  src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw5fc78862/productimages/singlepackshot/163288C00_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5"
                  alt="Main Heart Ring"
                  className="main-img"
                />
              </div>
              <div className="heart-ring-details">
                <p className="best-seller-heart-ring">
                  BEST SELLER | PANDORA ESSENCE
                </p>
                <p className="heart-ring-text">Organically Shaped Heart Ring</p>
              </div>
              <div className="price">
                <p>$125.00</p>
              </div>
            </div>
          </div>

          {/* Slide 10 */}
          <div className="slide">
            <div className="ten-product-hoop">
              <div className="main-image-hoop">
                <img
                  src={activeImageEarrings}
                  alt="Main Hoop"
                  className="main-img"
                />
              </div>
              <div className="color-options">
                {hoopEarringsImages.map(({ id, color, src, price }) => (
                  <div
                    key={id}
                    className="circle"
                    style={{ backgroundColor: color }}
                    onMouseOver={() => handleMouseOverEarrings(src, price)}
                  />
                ))}
              </div>
              <div className="hoop-details">
                <p className="best-seller-hoop">
                  BEST SELLER | PANDORA ESSENCE
                </p>
                <p className="hoop-text">Round Huggie Hoop Earrings </p>
              </div>
              <div className="price">
                <p>{priceEarrings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://us.pandora.net/en/jewelry/#contentID=159e51f9-7362-4760-8b21-eb58fb148509"
        className="shop-all-jewelry"
      >
        Shop All Jewelry
      </a>
      <button className="prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Trending;
