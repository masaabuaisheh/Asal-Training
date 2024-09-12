import React from "react";

interface CardProps {
  img: string;
  title: string;
  price: string | number;
}

const Card: React.FC<CardProps> = ({ img, title, price }) => {
  return (
    <div>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-price">
            <div className="price">{price}</div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
