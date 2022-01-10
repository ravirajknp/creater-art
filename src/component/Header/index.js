import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="sort-by-btn">
        <button className="btn">On Sale</button>
        <button className="btn">All</button>
      </div>
      <div className="sort">
        <select className="sort-select" name="sort" id="sort">
          <option value="L-to-H">Lowest to Highest</option>
          <option value="H-to-L">Highest to Lowest</option>
          <option value="popular">Popular</option>
          <option value="newly">Newly</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
