import React, { useState } from "react";
import Filternav from "../components/filtering-section/filter-nav/filternav";
import Products from "../components/filtering-section/products/products";
import Sidebar from "../components/filtering-section/sidebar/sidebar";
import Card from "../components/filtering-section/filter-components/card";
import products from "../components/filtering-section/data";

// Define types for product and filtered items
interface Product {
  img: string;
  title: string;
  price: string;
  category: string;
  color: string;
}

// Converts the price string (e.g., "$50") to a number by removing all non-numeric characters
const parsePrice = (price: string): number => {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
};

const Halloween = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  // This function updates query state when the user types in the search input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Filters the products to match the search query by checking if the product title includes the search term
  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // Updates selectedCategory when a user selects a filter option
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // A function that filters products based on selected filter and search query
  function filteredData(
    products: Product[],
    selected: string | null,
    query: string
  ): JSX.Element[] {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // If a filter is selected, further filter the products based on the selected criteria.
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, title, price }) => {
          const numericPrice = parsePrice(price);

          // Example logic for price ranges
          if (selected === "50" && numericPrice <= 50) return true;
          if (selected === "100" && numericPrice > 50 && numericPrice <= 100)
            return true;
          if (selected === "150" && numericPrice > 100 && numericPrice <= 150)
            return true;
          if (selected === "200" && numericPrice > 150) return true;

          return (
            category === selected || color === selected || title === selected
          );
        }
      );
    }
    // Creates Card components for each filtered product to display
    return filteredProducts.map(({ img, title, price }) => (
      <Card key={Math.random()} img={img} title={title} price={price} />
    ));
  }

  // Calls the filteredData function to get the filtered results based on the current states
  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Filternav query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </div>
  );
};

export default Halloween;
