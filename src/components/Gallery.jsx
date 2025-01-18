import React, { useState } from "react";
import "./Gallery.css";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  const imagePaths = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
  ];

  const columns = [
    imagePaths.slice(0, 2),
    imagePaths.slice(2, 6),
    imagePaths.slice(6, 9),
    imagePaths.slice(9, 12),
  ];

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc); // Set the selected image when clicked
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal by resetting the selected image
  };

  return (
    <div>
      {/* Header */}


      {/* Photo Grid */}
      <div className="row">
        {columns.map((column, columnIndex) => (
          <div className="column" key={columnIndex}>
            {column.map((imgSrc, imgIndex) => (
              <img
                src={imgSrc}
                alt={`Grid ${columnIndex}-${imgIndex}`}
                key={imgIndex}
                onClick={() => handleImageClick(imgSrc)} // Set image on click
              />
            ))}
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="gal-modal" onClick={handleCloseModal}>
          <div className="gal-modal-content">
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
