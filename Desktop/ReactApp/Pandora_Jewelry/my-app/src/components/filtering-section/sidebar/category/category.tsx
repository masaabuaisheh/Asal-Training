import React from "react";
import Input from "../../filter-components/input";

interface CategoryProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Category: React.FC<CategoryProps> = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="category"
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="charms"
          title="Charms"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="bracelets"
          title="Bracelets"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="rings"
          title="Rings"
          name="category"
        />
      </div>
    </div>
  );
};

export default Category;
