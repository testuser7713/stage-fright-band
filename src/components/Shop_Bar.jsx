import React from "react";
import { Link } from "react-router-dom";

import Arrow from "../assets/arrow_left.png";


import Merch1 from "../assets/merch1.png"
import Merch2 from "../assets/merch2.png"
import Merch3 from "../assets/merch3.png"

import "./Shop_Bar.css";

export default function menuBar() {
    const scrollHandler = (direction) => {
        console.log("Arrow clicked", direction);
        const menu = document.getElementById("menu_sec");
        const scrollAmount = 400;
        if (menu) {
            menu.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
        }
    };
    


  return (
    <div className="menuBar">
        <img
            src={Arrow}
            alt="left arrow"
            className="left_arrow"
            id="left_arrow"
            onClick={() => scrollHandler("left")}
        ></img>
      <div className="menu_sec" id="menu_sec">
        
        <div className="card1">
          
            <img src={Merch2} alt="Specials" loading="lazy"></img>
          
        </div>
        <div className="card1">
        
          <img src={Merch1} loading="lazy" alt="Appetizers" />
          
        
        </div>
        <div className="card1">
        
          <img src={Merch3} alt="Burgers" loading="lazy"></img>
        
        </div>
        <div className="card1">
          
            <img src={Merch1} alt="Pizza" loading="lazy" ></img>
          
        </div>
        <div className="card1">
          
            <img src={Merch2} alt="Tex" loading="lazy" ></img>
          
        </div>
        <div className="card1">
          
            <img src={Merch3} alt="Deserts" loading="lazy" ></img>
          
        </div>
        <div className="card1">
          
            <img src={Merch1} alt="Drinks" loading="lazy" ></img>
          
        </div>
        <div className="card1">
          
            <img src={Merch2} alt="Sides" loading="lazy" ></img>
          
        </div>
        <h5 className="border"></h5>
      </div>

      
      <img
        src={Arrow}
        alt="right arrow"
        className="right_arrow"
        id="right_arrow"
        onClick={() => scrollHandler("right")}
      ></img>
    </div>
  );
}