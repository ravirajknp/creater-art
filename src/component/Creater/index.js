import React from "react";
import "./index.css";

const Creater = ({ author, creater_pic, title }) => {
  return (
    <div className="creater">
      <div className="dp">
        <img src={creater_pic} alt="DP" />
      </div>
      <div className="title">
        <div className="author">
          <label className="author" htmlFor="author">
            {author}
          </label>
        </div>
        <div className="art-title">
          <label className="item-title" htmlFor="title">
            {title}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Creater;
