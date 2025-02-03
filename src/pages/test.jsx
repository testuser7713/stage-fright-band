import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import Tour_Layout from "../assets/tour_trans.svg"; // ensure path is correct

const map = {
  name: "tour-layout-map",
  areas: [
    { id: "1U", shape: "poly", coords: [589, 355, 620, 353, 675, 484, 589, 484], preFillColor: "rgba(255, 0, 0, 0)", lineWidth: 0 },
    { id: "2U", shape: "rect", coords: [273, 355, 587, 484], preFillColor: "rgba(255, 0, 0, 0)" },
  ],
};

const test = () => {
  const [selectedShapeId, setSelectedShapeId] = useState(null);

  const handleClick = (area) => {
    setSelectedShapeId(area.id);
    console.log("Area clicked:", area.id);
  };

  return (
    <div className="tour_page">
      <h3>Click an area</h3>
      <ImageMapper
        src={Tour_Layout}
        className="tour_layout"
        map={map}
        onClick={handleClick}
        width={958}
      />
      {selectedShapeId && <p>Selected Section: {selectedShapeId}</p>}
    </div>
  );
};

export default test;
