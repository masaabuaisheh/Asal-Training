import React, { useState } from "react";
import Filternav from "../components/filtering-section/filter-nav/filternav";
import Products from "../components/filtering-section/products/products";
import Sidebar from "../components/filtering-section/sidebar/sidebar";
import Card from "../components/filtering-section/filter-components/card";
import products from "../components/filtering-section/data";

// Define types for product and filter values
interface Product {
  img: string;
  title: string;
  price: string;
  category: string;
  color: string;
}

interface Filters {
  category?: string;
  color?: string;
  price?: string;
}

// Converts the price string (e.g., "$50") to a number by removing all non-numeric characters
const parsePrice = (price: string): number => {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
};

const Halloween = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [query, setQuery] = useState<string>("");

  // Updates the filters state when a user selects a filter option
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Updates query state when the user types in the search input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Filters the products based on selected filters and search query
  function filteredData(
    products: Product[],
    filters: Filters,
    query: string
  ): JSX.Element[] {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply filters
    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filters.color
      );
    }
    if (filters.price) {
      filteredProducts = filteredProducts.filter((product) => {
        const numericPrice = parsePrice(product.price);

        // Example logic for price ranges
        if (filters.price === "50" && numericPrice <= 50) return true;
        if (filters.price === "100" && numericPrice > 50 && numericPrice <= 100)
          return true;
        if (
          filters.price === "150" &&
          numericPrice > 100 &&
          numericPrice <= 150
        )
          return true;
        if (filters.price === "200" && numericPrice > 150) return true;

        return false;
      });
    }

    // Creates Card components for each filtered product to display
    return filteredProducts.map(({ img, title, price }) => (
      <Card key={Math.random()} img={img} title={title} price={price} />
    ));
  }

  // Calls the filteredData function to get the filtered results based on the current states
  const result = filteredData(products, filters, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Filternav query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </div>
  );
};

export default Halloween;
