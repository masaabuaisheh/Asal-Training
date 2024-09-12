import React from "react";
import Input from "../../filter-components/input";

interface ColorsProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Colors: React.FC<ColorsProps> = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="color" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="color"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="color"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="color"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="checkbox"
          value="nocolor"
          name="color"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        No Color
      </label>
    </div>
  );
};

export default Colors;
