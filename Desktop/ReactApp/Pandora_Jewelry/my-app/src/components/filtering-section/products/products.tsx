import React from "react";

interface ProductsProps {
  result: JSX.Element[];
}

const products: React.FC<ProductsProps> = ({ result }) => {
  return (
    <div>
      <section className="card-container">{result}</section>
    </div>
  );
};
export default products;
