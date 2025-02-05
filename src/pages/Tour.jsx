import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

import ImageMapper from "react-img-mapper";
import Tour_Layout from "../assets/tour_trans.svg";
import img1U from "../assets/1U.png";
import img2U from "../assets/2U.png";
import img3U from "../assets/3U.png";
import img4U from "../assets/4U.png";
import img5U from "../assets/5U.png";
import img6U from "../assets/6U.png";
import img7U from "../assets/7U.png";
import img8U from "../assets/8U.png";
import img9U from "../assets/9U.png";
import img1L from "../assets/1L.png";
import img2L from "../assets/2L.png";
import "./Tour.css";
import amer_airlines from "../assets/amer_airlines.jpg"
import Amer_Air from "../components/AmerAir.jsx"


const generateCircles = (xStart, yStart, width, height, radius, spacing, section) => { 
  const circles = []; 
  let seatCount = 1; // Incremental seat number

  // Default price mapping based on section
  const sectionPrices = {
    "1L": 280,
    "2L": 210,
    "2U": 190,
    "8U": 170
  };

  for (let x = xStart + radius; x + radius <= xStart + width; x += 2 * radius + spacing) { 
    for (let y = yStart + radius; y + radius <= yStart + height; y += 2 * radius + spacing) { 
      const seatNumber = `${section}-${seatCount.toString().padStart(2, '0')}`;

      // Apply dynamic pricing for section "1U"
      let price;
      if (section === "1L") {
        if (seatCount >= 1 && seatCount <= 27) {
          price = 260;
        } else if (seatCount >= 28 && seatCount <= 45) {
          price = 290;
        } else if (seatCount >= 46 && seatCount <= 63) {
          price = 320;
        } else {
          price = 0; // Default price if outside the range
        }
      } else {
        price = sectionPrices[section] || 0; // Default price for other sections
      }

      circles.push({ 
        shape: "circle", 
        coords: [x, y, radius], 
        preFillColor: "rgba(63, 144, 236, 0.66)", 
        seatNumber: seatNumber, 
        price: price,
        onClick: () => handleSeatClick(seatNumber, price) // Pass the price here
      });
      seatCount++;
    } 
  } 
  return circles;
};





const Tour = ({seat}) => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/tour_main")
  }
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(localStorage.getItem("seat") || "" );
  const [seatPrice, setSeatPrice] = useState(null);



const handleSeatClick = (seat, price) => {
  const shapeId = seat.split('-')[0];

  setSelectedShapeId(shapeId);
  setSelectedSeat(seat)
  setSeatPrice(price)

  
  localStorage.setItem("seat", JSON.stringify(seat));
  localStorage.setItem("price", price)

  window.dispatchEvent(new (Event("seatSelectionChanged")))
};




  const areas = [
      { id: "1U", shape: "poly", coords: [589, 355, 620, 353, 675, 484, 589, 484], preFillColor: "rgba(255, 0, 0, 0)", lineWidth: 0 },
      { id: "2U", shape: "rect", coords: [273, 355, 587, 484], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "3U", shape: "poly", coords: [271, 354, 272, 484, 191, 484, 182, 474, 243, 352, 251, 355], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "4U", shape: "poly", coords: [181, 473, 242, 351, 221, 339, 211, 328, 201, 305, 100, 356, 100, 391], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "6U", shape: "poly", coords: [101, 151, 200, 201, 206, 185, 222, 166, 240, 154, 182, 28, 101, 111], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "7U", shape: "poly", coords: [272, 28, 183, 28, 242, 155, 252, 152, 264, 151, 271, 153], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "8U", shape: "rect", coords: [273, 154, 590, 28], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "9U", shape: "poly", coords: [590, 153, 622, 157, 677, 28, 590, 28], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "1L", shape: "rect", coords: [462, 160, 614, 352], preFillColor: "rgba(255, 0, 0, 0)" },
      { id: "2L", shape: "rect", coords: [273, 352, 462, 160], preFillColor: "rgba(255, 0, 0, 0)" },
    ,
  ];

  const sectionImages = {
    "1U": img1U,
    "2U": img2U,
    "3U": img3U,
    "4U": img4U,
    "6U": img6U,
    "7U": img7U,
    "8U": img8U,
    "9U": img9U,
    "1L": img1L,
    "2L": img2L,
  };



const sectionMaps = {
  "1U": [
    { "shape": "circle", "coords": [25, 20, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-01", price: 220},
    { "shape": "circle", "coords": [45, 20, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-02", price: 220},
    { "shape": "circle", "coords": [25, 40, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-03", price: 220},
    { "shape": "circle", "coords": [45, 40, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-04", price:220 },
    { "shape": "circle", "coords": [65, 40, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-05", price: 220},
    { "shape": "circle", "coords": [25, 60, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-06", price:220 },
    { "shape": "circle", "coords": [45, 60, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-07", price: 220 },
    { "shape": "circle", "coords": [65, 60, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-08", price:220},
    { "shape": "circle", "coords": [25, 80, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-09", price:180},
    { "shape": "circle", "coords": [45, 80, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-10", price:180 },
    { "shape": "circle", "coords": [65, 80, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-11", price:180},
    { "shape": "circle", "coords": [85, 80, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-12", price:180 },
    { "shape": "circle", "coords": [25, 100, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-13", price:180},
    { "shape": "circle", "coords": [45, 100, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-14", price:180 },
    { "shape": "circle", "coords": [65, 100, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-15", price:180 },
    { "shape": "circle", "coords": [85, 100, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-16", price:180},
    { "shape": "circle", "coords": [25, 120, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-17", price:180 },
    { "shape": "circle", "coords": [45, 120, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-18", price:180},
    { "shape": "circle", "coords": [65, 120, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-19", price:180 },
    { "shape": "circle", "coords": [85, 120, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-20", price:180 },
    { "shape": "circle", "coords": [105, 120, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-21", price:100 },
    { "shape": "circle", "coords": [25, 140, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-22", price:100 },
    { "shape": "circle", "coords": [45, 140, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-23", price:100 },
    { "shape": "circle", "coords": [65, 140, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-24", price:100 },
    { "shape": "circle", "coords": [85, 140, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-25", price:100 },
    { "shape": "circle", "coords": [105, 140, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-26", price:100 },
    { "shape": "circle", "coords": [25, 160, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-27", price:100 },
    { "shape": "circle", "coords": [45, 160, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-28", price:100 },
    { "shape": "circle", "coords": [65, 160, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-29", price:100 },
    { "shape": "circle", "coords": [85, 160, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-30", price:100 },
    { "shape": "circle", "coords": [105, 160, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-31", price:100 },
    { "shape": "circle", "coords": [25, 180, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-33", price:80 },
    { "shape": "circle", "coords": [45, 180, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-34", price: 80 },
    { "shape": "circle", "coords": [65, 180, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-35", price:80},
    { "shape": "circle", "coords": [85, 180, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-36", price:80 },
    { "shape": "circle", "coords": [105, 180, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-37", price:80 },
    { "shape": "circle", "coords": [125, 180, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-38", price:80 },
    { "shape": "circle", "coords": [25, 200, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-39", price:80 },
    { "shape": "circle", "coords": [45, 200, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-40", price:80 },
    { "shape": "circle", "coords": [65, 200, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-41", price:80 },
    { "shape": "circle", "coords": [85, 200, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-42", price:80 },
    { "shape": "circle", "coords": [105, 200, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-43", price:80},
    { "shape": "circle", "coords": [125, 200, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-44", price:80 },
    { "shape": "circle", "coords": [25, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-46", price:80 },
    { "shape": "circle", "coords": [45, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-52", price:80 },
    { "shape": "circle", "coords": [65, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-47", price:80 },
    { "shape": "circle", "coords": [85, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-48", price:80},
    { "shape": "circle", "coords": [105, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-49", price:80},
    { "shape": "circle", "coords": [125, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-50", price:80 },
    { "shape": "circle", "coords": [145, 220, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-51", price:80 }      
  ],

    "2U": generateCircles(14,16,520,210,10,5, "2U"),

  
    "3U": [
      { shape: "circle", coords: [135, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-1", price: 160 },
      { shape: "circle", coords: [110, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-2", price: 160 },
      { shape: "circle", coords: [135, 50, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-3", price: 160 },
      { shape: "circle", coords: [110, 50, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-4", price: 160 },
      { shape: "circle", coords: [135, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-5", price: 160 },
      { shape: "circle", coords: [110, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-6", price: 160 },
      { shape: "circle", coords: [85, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-7", price: 160 },
      { shape: "circle", coords: [135, 100, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-8", price: 160 },
      { shape: "circle", coords: [110, 100, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-9", price: 120 },
      { shape: "circle", coords: [85, 100, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-10", price: 120 },
      { shape: "circle", coords: [135, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-11", price: 120 },
      { shape: "circle", coords: [110, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-12", price: 120 },
      { shape: "circle", coords: [85, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-13", price: 120 },
      { shape: "circle", coords: [60, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-14", price: 120 },
      { shape: "circle", coords: [135, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-15", price: 120 },
      { shape: "circle", coords: [110, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-16", price: 120 },
      { shape: "circle", coords: [85, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-17", price: 120 },
      { shape: "circle", coords: [60, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-18", price: 120 },
      { shape: "circle", coords: [135, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-19", price: 100 },
      { shape: "circle", coords: [110, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-20", price: 100 },
      { shape: "circle", coords: [85, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-21", price: 100 },
      { shape: "circle", coords: [60, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-22", price: 100 },
      { shape: "circle", coords: [35, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-23", price: 100 },
      { shape: "circle", coords: [135, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-24", price: 100 },
      { shape: "circle", coords: [110, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-25", price: 100 },
      { shape: "circle", coords: [85, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-26", price: 60 },
      { shape: "circle", coords: [60, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-27", price: 60 },
      { shape: "circle", coords: [35, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-28", price: 60 }
      


    ],
    "4U": [
      { shape: "circle", coords: [125, 35, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-1", price: 140 },
      { shape: "circle", coords: [125, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-2", price: 140 },
      { shape: "circle", coords: [125, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-3", price: 120 },
      { shape: "circle", coords: [125, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-4", price: 120 },
      { shape: "circle", coords: [125, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-5", price: 100},
      { shape: "circle", coords: [125, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-6", price: 80 },
      { shape: "circle", coords: [150, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-7", price: 150 },
      { shape: "circle", coords: [150, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-8", price: 160 },
      { shape: "circle", coords: [150, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-9", price: 160 },
      { shape: "circle", coords: [100, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-10", price: 120 },
      { shape: "circle", coords: [100, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-11", price: 100 },
      { shape: "circle", coords: [100, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-12", price: 110 },
      { shape: "circle", coords: [100, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-13", price: 80 },
      { shape: "circle", coords: [100, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-14", price: 70 },
      { shape: "circle", coords: [100, 185, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-15", price: 70 },
      { shape: "circle", coords: [75, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-16", price: 90 },
      { shape: "circle", coords: [75, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-17", price: 90 },
      { shape: "circle", coords: [75, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-18", price: 80 },
      { shape: "circle", coords: [75, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-19", price: 80 },
      { shape: "circle", coords: [75, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-20", price: 75 },
      { shape: "circle", coords: [50, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-21", price: 80 },
      { shape: "circle", coords: [50, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-22", price: 60 },
      { shape: "circle", coords: [50, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-23", price: 65 },
      { shape: "circle", coords: [25, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-24", price: 35 },
      { shape: "circle", coords: [25, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-25", price: 45 }
      
    ],
    "6U": [
      { shape: "circle", coords: [100, 35, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-1", price: 80 },
      { shape: "circle", coords: [125, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-2", price: 80 },
      { shape: "circle", coords: [125, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-3", price: 80 },
      { shape: "circle", coords: [125, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-4", price: 90 },
      { shape: "circle", coords: [125, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-5", price: 110 },
      { shape: "circle", coords: [125, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-6", price: 120 },
      { shape: "circle", coords: [125, 185, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-7", price: 120 },
      { shape: "circle", coords: [125, 210, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-8", price: 120 },
      { shape: "circle", coords: [150, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-9", price: 120 },
      { shape: "circle", coords: [150, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-10", price: 120 },
      { shape: "circle", coords: [150, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-11", price: 90 },
      { shape: "circle", coords: [100, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-12", price: 80 },
      { shape: "circle", coords: [100, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-13", price: 80 },
      { shape: "circle", coords: [100, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-14", price: 100 },
      { shape: "circle", coords: [100, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-15", price: 100 },
      { shape: "circle", coords: [100, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-16", price: 100 },
      { shape: "circle", coords: [100, 185, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-17", price: 100 },
      { shape: "circle", coords: [75, 60, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-18", price: 80 },
      { shape: "circle", coords: [75, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-19", price: 70 },
      { shape: "circle", coords: [75, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-20", price: 90 },
      { shape: "circle", coords: [75, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-21", price: 90 },
      { shape: "circle", coords: [75, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-22", price: 100 },
      { shape: "circle", coords: [75, 185, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-23", price: 100 },
      { shape: "circle", coords: [50, 85, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-24", price: 60 },
      { shape: "circle", coords: [50, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-25", price: 70 },
      { shape: "circle", coords: [50, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-26", price: 80 },
      { shape: "circle", coords: [50, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-27", price: 80 },
      { shape: "circle", coords: [25, 135, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-28", price: 40 },
      { shape: "circle", coords: [25, 110, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-29", price: 40 },
      { shape: "circle", coords: [25, 160, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-30", price: 80 }
      
      

    ],
    "7U": [
      { seatNumber: "7U-1", shape: "circle", coords: [135, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 80 },
      { seatNumber: "7U-26", shape: "circle", coords: [35, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 80 },
    
      { seatNumber: "7U-2", shape: "circle", coords: [110, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 80 },
      { seatNumber: "7U-3", shape: "circle", coords: [135, 50, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 110 },
      { seatNumber: "7U-4", shape: "circle", coords: [110, 50, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 110 },
      { seatNumber: "7U-5", shape: "circle", coords: [135, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-6", shape: "circle", coords: [110, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-7", shape: "circle", coords: [85, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-22", shape: "circle", coords: [60, 75, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
    
      { seatNumber: "7U-8", shape: "circle", coords: [135, 100, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-9", shape: "circle", coords: [110, 100, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-10", shape: "circle", coords: [85, 100, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-11", shape: "circle", coords: [135, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-12", shape: "circle", coords: [110, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
      { seatNumber: "7U-23", shape: "circle", coords: [85, 125, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 130 },
    
      { seatNumber: "7U-13", shape: "circle", coords: [85, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 80 },
      { seatNumber: "7U-14", shape: "circle", coords: [60, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 80 },
      { seatNumber: "7U-15", shape: "circle", coords: [135, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 150 },
      { seatNumber: "7U-16", shape: "circle", coords: [110, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 150 },
      { seatNumber: "7U-17", shape: "circle", coords: [85, 150, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 150 },
      { seatNumber: "7U-18", shape: "circle", coords: [60, 50, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 110 },
      { seatNumber: "7U-19", shape: "circle", coords: [85, 50, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 110 },
    
      { seatNumber: "7U-20", shape: "circle", coords: [135, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 140 },
      { seatNumber: "7U-21", shape: "circle", coords: [110, 175, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 140 },
      { seatNumber: "7U-24", shape: "circle", coords: [110, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 150 },
      { seatNumber: "7U-25", shape: "circle", coords: [135, 200, 10], preFillColor: "rgba(63, 144, 236, 0.66)", price: 150 }


        
    ],
    "8U": generateCircles(20,40,480,180,10,5, "8U"),

    "9U": [
        { shape: "circle", coords: [25, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-1", onClick: () => handleSeatClick("9U-1") },
        { shape: "circle", coords: [45, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-2", onClick: () => handleSeatClick("9U-2") },
        { shape: "circle", coords: [25, 40, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-3", onClick: () => handleSeatClick("9U-3") },
        { shape: "circle", coords: [45, 40, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-4", onClick: () => handleSeatClick("9U-4") },
        { shape: "circle", coords: [65, 40, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-5", onClick: () => handleSeatClick("9U-5") },
        { shape: "circle", coords: [25, 60, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-6", onClick: () => handleSeatClick("9U-6") },
        { shape: "circle", coords: [45, 60, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-7", onClick: () => handleSeatClick("9U-7") },
        { shape: "circle", coords: [65, 60, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-8", onClick: () => handleSeatClick("9U-8") },
        { shape: "circle", coords: [25, 80, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-9", onClick: () => handleSeatClick("9U-9") },
        { shape: "circle", coords: [45, 80, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-10", onClick: () => handleSeatClick("9U-10") },
        { shape: "circle", coords: [65, 80, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-11", onClick: () => handleSeatClick("9U-11") },
        { shape: "circle", coords: [85, 80, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-12", onClick: () => handleSeatClick("9U-12") },
        { shape: "circle", coords: [25, 100, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-13", onClick: () => handleSeatClick("9U-13") },
        { shape: "circle", coords: [45, 100, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-14", onClick: () => handleSeatClick("9U-14") },
        { shape: "circle", coords: [65, 100, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-15", onClick: () => handleSeatClick("9U-15") },
        { shape: "circle", coords: [85, 100, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-16", onClick: () => handleSeatClick("9U-16") },
        { shape: "circle", coords: [25, 120, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-17", onClick: () => handleSeatClick("9U-17") },
        { shape: "circle", coords: [45, 120, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-18", onClick: () => handleSeatClick("9U-18") },
        { shape: "circle", coords: [65, 120, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-19", onClick: () => handleSeatClick("9U-19") },
        { shape: "circle", coords: [85, 120, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-20", onClick: () => handleSeatClick("9U-20") },
        { shape: "circle", coords: [105, 100, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-21", onClick: () => handleSeatClick("9U-21") },
        { shape: "circle", coords: [25, 140, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-22", onClick: () => handleSeatClick("9U-22") },
        { shape: "circle", coords: [45, 140, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-23", onClick: () => handleSeatClick("9U-23") },
        { shape: "circle", coords: [65, 140, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-24", onClick: () => handleSeatClick("9U-24") },
        { shape: "circle", coords: [85, 140, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-25", onClick: () => handleSeatClick("9U-25") },
        { shape: "circle", coords: [105, 80, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-26", onClick: () => handleSeatClick("9U-26") },
        { shape: "circle", coords: [25, 160, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-27", onClick: () => handleSeatClick("9U-27") },
        { shape: "circle", coords: [45, 160, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-28", onClick: () => handleSeatClick("9U-28") },
        { shape: "circle", coords: [65, 160, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-29", onClick: () => handleSeatClick("9U-29") },
        { shape: "circle", coords: [85, 60, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-30", onClick: () => handleSeatClick("9U-30") },
        { shape: "circle", coords: [105, 60, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-31", onClick: () => handleSeatClick("9U-31") },
        { shape: "circle", coords: [125, 60, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-32", onClick: () => handleSeatClick("9U-32") },
        { shape: "circle", coords: [25, 180, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-33", onClick: () => handleSeatClick("9U-33") },
        { shape: "circle", coords: [45, 180, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-34", onClick: () => handleSeatClick("9U-34") },
        { shape: "circle", coords: [65, 180, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-35", onClick: () => handleSeatClick("9U-35") },
        { shape: "circle", coords: [25, 200, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-36", onClick: () => handleSeatClick("9U-36") },
        { shape: "circle", coords: [45, 200, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-37", onClick: () => handleSeatClick("9U-37") },
        { shape: "circle", coords: [65, 200, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-38", onClick: () => handleSeatClick("9U-38") },
        { shape: "circle", coords: [85, 40, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-39", onClick: () => handleSeatClick("9U-39") },
        { shape: "circle", coords: [105, 40, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-40", onClick: () => handleSeatClick("9U-40") },
        { shape: "circle", coords: [125, 40, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-41", onClick: () => handleSeatClick("9U-41") },
        { shape: "circle", coords: [65, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-42", onClick: () => handleSeatClick("9U-42") },
        { shape: "circle", coords: [85, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-43", onClick: () => handleSeatClick("9U-43") },
        { shape: "circle", coords: [105, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-44", onClick: () => handleSeatClick("9U-44") },
        { shape: "circle", coords: [125, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-45", onClick: () => handleSeatClick("9U-45") },
        { shape: "circle", coords: [145, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-46", onClick: () => handleSeatClick("9U-46") }
    ],
    "1L": generateCircles(8,8,170,220,10,5,"1L"),

    "2L": generateCircles(8,8,220,220,10,5,"2L"),

  };


  const handleClick = (area) => {
    if (sectionImages[area.id]) {
      setSelectedShapeId(area.id);
    }
  
    // Check if it's a seat click
    if (area.seatNumber) {
      handleSeatClick(area.seatNumber, area.price);
    }
  };

  
  const allCircles = [];
  allCircles.push(...sectionMaps["1U"]);
  allCircles.push(...sectionMaps["2U"]);
  allCircles.push(...sectionMaps["3U"]);
  allCircles.push(...sectionMaps["4U"]);
  allCircles.push(...sectionMaps["6U"]);
  allCircles.push(...sectionMaps["7U"]);
  allCircles.push(...sectionMaps["8U"]);
  allCircles.push(...sectionMaps["9U"]);
  allCircles.push(...sectionMaps["1L"]);
  allCircles.push(...sectionMaps["2L"]);

  const [sortedCircles, setSortedCircles] = useState([...allCircles]);
  const [sliderValue, setSliderValue] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const sorted = [...allCircles].sort((a, b) => a.price - b.price);
    const step = Math.floor(sorted.length / 10) || 1;
    const startIndex = sliderValue * step;
    const endIndex = startIndex + step;
    setSortedCircles(sorted.slice(startIndex, endIndex));
    setMaxPrice(sorted[sorted.length - 1].price);  // Set the max price for the current sortedCircles
  }, [sliderValue, allCircles]);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const selectedPrice = sortedCircles[0]?.price || 0;  // Get the first circle's price as the selected price


  
  useEffect(() => {
    const handleSeatSelectionChange = () => {
      const seat = JSON.parse(localStorage.getItem("seat")) || "";
      const price = JSON.parse(localStorage.getItem("price")) || 0;
      setSelectedSeat(seat);
      setSeatPrice(price)
    };

    // Listen for the custom event
    window.addEventListener("seatSelectionChanged", handleSeatSelectionChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("seatSelectionChanged", handleSeatSelectionChange);
    };
  }, []);

  // Extract the section and seat number
  const [section, actualSeat] = selectedSeat.split("-") || ["", ""];
  

  const renderSelectedImage = () => {
    if (!selectedShapeId) return null;

    const imageUrl = sectionImages[selectedShapeId];
    const areaMap = sectionMaps[selectedShapeId];

    return (
      <div className="image_container">
        <div className="img_sub">
        <h3 className="selected_text">Selected Section: {selectedShapeId}</h3>
        <div className="section_con">
        <ImageMapper
          src={imageUrl}
          name={selectedShapeId}
          areas={areaMap}
          onClick={handleClick}
          className="section_mapper"
        />
        </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tour_page">
      <button className="back_tourmain" onClick={handleClickButton}>
        ← Select Tour Date
      </button>
      <div className="tour_details">
        <div className="venue_con">
          <img className="amer_air" src={amer_airlines} />
        </div>
        <div className="tour_name_con">
          <div className="tour_det">
            <h2>American Airlines Center</h2>
            <h3>May 21, 2024</h3>
            <h3>7:00 PM CST</h3>
            <h3>2500 Victory Ave, Dallas, TX 75219</h3>
          </div>
        </div>
        <div className="map_con">
          <Amer_Air />
        </div>
      </div>
      <div className="tour_map_con">
        <div className="tour_left">
          <div className="select_text_con">
            <h3 className="select_sec_text">Please Select a Section:</h3>
          </div>
          <ImageMapper
            src={Tour_Layout}
            className="tour_layout"
            name="tour-layout-map"
            areas={areas}
            onClick={handleClick}
            width={958}
          />
        </div>
        <div className="tour_right">
          <div className="seat_select">
            {renderSelectedImage()}
          </div>
          <div className={`seat_con ${selectedSeat && selectedShapeId ? 'align-right' : 'align-center'}`}>
            <div className="seat_details">
              {selectedSeat && selectedShapeId && (
                <h3 className="selected_seat_main">Selected Seat: {selectedSeat}</h3>
              )}
              {selectedSeat && selectedShapeId && (
                <div className="seat_sub_con">
                  <div className="">
                    <div className="seat_sub">
                      <div>
                        <p>Section<br /></p>
                        <p><strong>{section}</strong></p>
                      </div>
                      <div>
                        <p>Number<br /> </p>
                        <p><strong>{actualSeat}</strong></p>
                      </div>
                      <div>
                        <p>Price</p>
                        <p><strong>${seatPrice}</strong></p>
                      </div>
                    </div>
                    <div className="add_cart_con">
                      <button
                        className="checkout_but"
                        onClick={() => navigate("/checkout")}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="slider_text">
                <h2>Find Cheapest Seats</h2>
              </div>
              <div>
                <div className="slider_con_con">
                <div className="slider_con">
                  <span>${selectedPrice}</span> {/* Display selected price on the left */}
                  <input
                    type="range"
                    min="0"
                    max="9"
                    step="1"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="slider"
                  />
                  <span>${maxPrice}</span> {/* Display max price on the right */}
                </div>
                </div>

                <div
                  style={{
                    maxHeight: '300px', /* Set the max height of the list */
                    overflowY: 'auto', /* Enable vertical scrolling */
                    border: '1px solid rgb(45, 45, 45)', /* Optional: Add border for styling */
                    padding: '15px', /* Optional: Add padding */
                    borderRadius: '10px'
                  }}
                >
                  {sortedCircles.map((circle) => (
                    <div key={circle.seatNumber} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div className="seat_ind">
                        Seat {circle.seatNumber}: ${circle.price}
                      </div>
                      <button
                        className="select_but"
                        onClick={() => handleSeatClick(circle.seatNumber, circle.price)}
                        style={{
                          marginLeft: '5px', /* Space between seat info and button */
                          padding: '5px 10px',
                          backgroundColor: '#c61c1d', /* Green button */
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}  
  export default Tour;
  