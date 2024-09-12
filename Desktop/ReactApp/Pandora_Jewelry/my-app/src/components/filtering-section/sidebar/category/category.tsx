import React from "react";
import Input from "../../filter-components/input";

interface PriceProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Category: React.FC<PriceProps> = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="charms"
          title="Charms"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bracelets"
          title="Bracelets"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="rings"
          title="Rings"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
