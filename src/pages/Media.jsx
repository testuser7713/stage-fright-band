import React, { useState, useEffect } from "react";
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


const generateCircles = (xStart, yStart, width, height, radius, spacing) => { 
  const circles = []; 
  for (let y = yStart + radius; y + radius <= yStart + height; y += 2 * radius + spacing) { 
    for (let x = xStart + radius; x + radius <= xStart + width; x += 2 * radius + spacing) { 
      circles.push({ shape: "circle", coords: [x, y, radius], preFillColor: "rgba(63, 144, 236, 0.66)" }); 
    } 
  } 
  return circles;
};

const Tour = ({seat}) => {
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(localStorage.getItem("seat") || "" );


const handleSeatClick = (seat) => {
  localStorage.setItem("seat", JSON.stringify(seat));
  setSelectedSeat(seat)

  window.dispatchEvent(new (Event("seatSelectionChanged")))
};




  const map = {
    name: "tour-layout-map",
    areas: [
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
    ],
  };

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
    { "shape": "circle", "coords": [25, 20, 8], "preFillColor": "rgba(63, 144, 236, 0.66)", "seatNumber": "1U-01", "onclick": () => handleSeatClick('1U-01') },

  ],

    "2U": generateCircles(12,16,540,210,10,5),

  
    "3U": [
      { shape: "circle", coords: [135, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "3U-1", onClick: () => handleSeatClick("3U-1") },

      


    ],
    "4U": [
      { shape: "circle", coords: [125, 35, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "4U-1", onClick: () => handleSeatClick("4U-1") },

      
    ],
    "6U": [
      { shape: "circle", coords: [100, 35, 10], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "6U-1", onClick: () => handleSeatClick("6U-1") },

      

    ],
    "7U": [
      { seatNumber: "7U-1", shape: "circle", coords: [135, 25, 10], preFillColor: "rgba(63, 144, 236, 0.66)", onClick: () => handleSeatClick("7U-1") },



        
    ],
    "8U": generateCircles(20,40,490,180,10,5),

    "9U": [
        { shape: "circle", coords: [25, 20, 8], preFillColor: "rgba(63, 144, 236, 0.66)", seatNumber: "9U-1", onClick: () => handleSeatClick("9U-1") },

    ],
    "1L": generateCircles(8,8,170,220,10,5),

    "2L": generateCircles(8,8,220,220,10,5),

  };


  const handleClick = (area) => {
    if (sectionImages[area.id]) {
      setSelectedShapeId(area.id);
    }
  
    // Check if it's a seat click
    if (area.seatNumber) {
      handleSeatClick(area.seatNumber);
    }
  };

  

  
  useEffect(() => {
    const handleSeatSelectionChange = () => {
      setSelectedSeat(localStorage.getItem("seat") || "");
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
      <div className="image-container">
        <h3 className="selected_text">Selected Section: {selectedShapeId}</h3>
        <div className="section_mapper">
        <ImageMapper
          src={imageUrl}
          map={{ name: selectedShapeId, areas: areaMap }}
          onClick={handleClick}
          className="section_mapper"
          
        />
        </div>
      </div>
    );
  };

  return (
    <div className="tour_map_con">
      <div className="tour_left">
        <ImageMapper
          src={Tour_Layout}
          className="tour_layout"
          map={map}
          onClick={handleClick}
          width={958}
        />
      </div>
      <div className="tour_right">
        <div className="seat_select">

          {renderSelectedImage()}
        </div>
      
      
        <div className="seat_details">
          <h3>Selected Seat:</h3>
          {selectedSeat && (
          <p>
            Selected Seat: <strong>{selectedSeat}</strong> <br />
            Section: <strong>{section}</strong> <br />
            Number: <strong>{actualSeat}</strong>
          </p>
        )}

        </div>
      </div>
    </div>
  );
};

export default Tour;