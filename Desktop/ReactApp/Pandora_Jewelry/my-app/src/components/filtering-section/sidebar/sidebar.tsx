import React from "react";
import Category from "./category/category";
import Price from "./price/price";
import Colors from "./color/color";

interface SidebarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const sidebar: React.FC<SidebarProps> = ({ handleChange }) => {
  return (
    <div>
      <section className="sidebar">
        <div className="sidebar-content">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </div>
  );
};

export default sidebar;
