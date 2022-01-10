import React from "react";
import "./index.css";
import home from "../../assets/home.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="home-icon">
        <img src={home} alt="Home" />
      </div>
      <div className="incre-decre-btn">
          <div className="inc-dec"><button>&lt;</button></div>
          <div className="value">1 of 6</div>
          <div className="inc-dec"><button>&gt;</button></div>
      </div>
    </div>
  );
};

export default Footer;
