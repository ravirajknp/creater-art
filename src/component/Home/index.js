import React from "react";
import Card from "../Card";
import Creater from "../Creater";
import Footer from "../Footer";
import serach_icon from "../../assets/seach_icon.svg";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
        <header>
              <div className="header-head">
                  <h1>Art Title</h1>

                 <div className="user">
                 <Creater />
                 </div>
              </div>
          </header>
      <div className="home-container">

        <div className="main">
          <div className="sidebar">
            <div className="artist">
              <h2>Artist</h2>
            </div>
            <div class="search">
              <img src={serach_icon} alt="Search-icon" class="search-icon" />
              <input
                placeholder="Search from 9999 Creaters"
                class="input-search"
                type="search"
              />
            </div>
            <div className="artist-icon">
              <Creater />
            </div>
          </div>
          <div className="main-content">
            <Card />
          </div>
        </div>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
