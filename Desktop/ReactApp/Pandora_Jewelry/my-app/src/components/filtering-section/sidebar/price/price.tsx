import React from "react";
import Input from "../../filter-components/input";

interface PriceProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Price: React.FC<PriceProps> = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="price" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="50"
        title="$0 - 50"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="100"
        title="$50 - $100"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="150"
        title="$100 - $150"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value="200"
        title="Over $150"
        name="price"
      />
    </div>
  );
};

export default Price;
