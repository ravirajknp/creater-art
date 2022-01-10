import React from "react";
import "./index.css";
import mobile from "../../assets/mobile.jpg";
import Creater from "../Creater";
import profileDP from "../../assets/profile_pic.png";
import Header from "../Header";

const Card = () => {
  
  const itemData = [
    {
      id: 1,
      item_pic: mobile,
      price: 2335.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 2,
      item_pic: mobile,
      price: 2305.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 3,
      item_pic: mobile,
      price: 2145.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 4,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 5,
      item_pic: mobile,
      price: 2355.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 6,
      item_pic: mobile,
      price: 2745.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 7,
      item_pic: mobile,
      price: 2945.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 8,
      item_pic: mobile,
      price: 2045.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 9,
      item_pic: mobile,
      price: 2349.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },

    {
      id: 10,
      item_pic: mobile,
      price: 1345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 11,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 12,
      item_pic: mobile,
      price: 2335.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 13,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 14,
      item_pic: mobile,
      price: 245.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 15,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 16,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 17,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
    {
      id: 18,
      item_pic: mobile,
      price: 2345.0,
      author: "Steave Jobs",
      creater_profile: profileDP,
      title: "JavaScript",
    },
  ];
  const priceLowToHigh = () => {
   const priceItem= itemData.map(rate=> {
      return rate.price;
    })

    const sortedPrice = priceItem.sort((a,b)=> a-b)
    console.log(sortedPrice,'jj');
  }

  priceLowToHigh();

  return (
    <>
    <Header />
      <div className="container">
        <div className="card-item">
          {itemData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

const Cards = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img src={item.item_pic} alt="item_pic" />
        </div>
        <div className="creater-profile">
          <Creater
            author={item.author}
            creater_pic={item.creater_profile}
            title={item.title}
          />
        </div>
        <div className="price">
          <span>$ {item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
