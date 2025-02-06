import SQLiteComponent from "../SQLiteComponent";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import Shirt1_front from "../assets/shirtOne_front.png";
import Shirt1_back from "../assets/shirtOne_back.png";
import Shirt2_front from "../assets/shirtTwo_front.png";
import Shirt2_back from "../assets/shirtTwo_back.png";
import Shirt3_front from "../assets/shirtThree_front.png";
import Shirt3_back from "../assets/shirtThree_back.png";
import Shirt4_front from "../assets/shirtFour_front.png";
import Shirt4_back from "../assets/shirtFour_back.png";

import Shirt5_front from "../assets/shirt5.png"
import Shirt6_front from "../assets/shirt6.png"
import Shirt7_front from "../assets/shirt7.png"
import Shirt8_front from "../assets/shirt8.png"
import Shirt9_front from "../assets/shirt9.png"
import Shirt10_front from "../assets/shirt10.png"

import Shirt5_back from "../assets/shirt5_back.png"
import Shirt6_back from "../assets/shirt6_back.png"
import Shirt7_back from "../assets/shirt7_back.png"
import Shirt8_back from "../assets/shirt8_back.png"
import Shirt9_back from "../assets/shirt9_back.png"
import Shirt10_back from "../assets/shirt10_back.png"

import toteOne from "../assets/toteOne.png"
import toteTwo from "../assets/toteTwo.png"
import cap_front from "../assets/cap_front.png"
import cap_back from "../assets/cap_back.png"
import tokens from "../assets/tokens.png"
import bundle_back from "../assets/bundle_back.png"
import bundle_front from "../assets/bundle_front.png"
import fanny_front from "../assets/fanny_front.png"
import fanny_back from "../assets/fanny_back.png"

import album1 from "../assets/albums.png"
import album2 from "../assets/albums (1).png"
import album3 from "../assets/albums (3).png"
import album4 from "../assets/album4 (1).png"

import record1 from "../assets/record1.png"
import record2 from "../assets/record2.png"
import record3 from "../assets/record3.png"

import shirt5_blue from "../assets/shirt5_blue.png"
import shirt5_yellow from "../assets/shirt5_yellow.png"
import shirt6_blue from "../assets/shirt6_blue.png"
import shirt6_red from "../assets/shirt6_gold.png"
import shirt7_blue from "../assets/shirt7_blue.png"
import shirt7_pink from "../assets/shirt7_pink.png"


import CartSidebar from "../components/CartSideBar";
import "../pages/ShopDetails.css"
const sizes = ["S", "M", "L", "XL"]; // Size options

const itemColors = {
  shirt5: ["#c22e2e", "#445cc0", "#c2924a"], // Red, Black, White
  shirt6: ["#e3d2c7", "#43426c", "#9c8073"], // Blue, Gray, Black
  shirt7: ["#f4a45f", "#6b5be0", "#a95978"], // Yellow, Green, Navy
};
const itemImages = {
  shirt5: {
    "#c22e2e": Shirt5_front,
    "#445cc0": shirt5_blue,
    "#c2924a": shirt5_yellow
  },
  shirt6: {
    "#e3d2c7": Shirt6_front,
    "#43426c": shirt6_blue,
    "#9c8073": shirt6_red
  },
  shirt7: {
    "#f4a45f": Shirt7_front,
    "#6b5be0": shirt7_blue,
    "#a95978": shirt7_pink
  },
};



const items = [
  { id: "shirt1", name: "Stage Fright Classic Longsleeve", description: "This comfortable long-sleeve shirt features a timeless Stage Fright design, perfect for cooler days. Made from soft, breathable fabric, it’s a stylish choice for any fan.", price: 29.99, image: Shirt1_front, backImage: Shirt1_back },
  { id: "shirt2", name: "Stage Fright Zip-Up Sweatshirt", description: "Stay warm in style with this Stage Fright zip-up sweatshirt, complete with a sleek logo design. Ideal for layering, it combines comfort and fashion effortlessly.", price: 29.99, image: Shirt2_front, backImage: Shirt2_back },
  { id: "shirt3", name: "Stage Fright Classic Graphic Tee", description: "A must-have for fans, this graphic tee showcases bold Stage Fright artwork. Lightweight and versatile, it's great for casual outings or concerts.", price: 29.99, image: Shirt3_front, backImage: Shirt3_back },
  { id: "shirt4", name: "Stage Fright Classic Black Tee", description: "This classic black tee highlights the Stage Fright logo in a clean and minimalist style. Perfect for everyday wear, it pairs well with any outfit.", price: 29.99, image: Shirt4_front, backImage: Shirt4_back },
  { id: "shirt5", name: "Stage Fright Tour Longsleeve", description: "Show your support for the Stage Fright tour with this sleek longsleeve. Featuring tour dates on the back, it's the perfect keepsake for fans.", price: 34.99, image: Shirt5_front, backImage: Shirt5_back },
  { id: "shirt6", name: "Band Member Photo Tee", description: "This tee features a striking photo of the band, capturing their iconic style. Made from soft cotton, it's a bold addition to any fan’s wardrobe.", price: 27.99, image: Shirt6_front, backImage: Shirt6_back },
  { id: "shirt7", name: "Stage Fright CD Zipup", description: "Inspired by the Stage Fright CD artwork, this zip-up hoodie is perfect for chilly days. Cozy and versatile, it’s a standout piece for any fan.", price: 49.99, image: Shirt7_front, backImage: Shirt7_back },
  { id: "shirt8", name: "On Tour White Tee", description: "This crisp white tee features exclusive tour graphics, making it a fresh addition to your collection. Its lightweight fabric is ideal for concerts and casual outings.", price: 24.99, image: Shirt8_front, backImage: Shirt8_back },
  { id: "shirt9", name: "Stage Fright Rocker Tee", description: "With its edgy design and distressed look, this rocker tee is made for fans who love a bold style. It’s the ultimate statement piece.", price: 29.99, image: Shirt9_front, backImage: Shirt9_back },
  { id: "shirt10", name: "Stage Photo Tee", description: "Capture the energy of the stage with this vivid photo tee. Designed for comfort, it's perfect for reliving concert memories.", price: 27.99, image: Shirt10_front, backImage: Shirt10_back },
  { id: "toteOne", name: "Stage Fright Classic Tote", description: "Carry your essentials in this classic tote bag featuring the Stage Fright logo. Durable and spacious, it’s perfect for shopping or a day out.", price: 29.99, image: toteOne },
  { id: "toteTwo", name: "Stage Fright Graphic Tote", description: "Show off your fandom with this vibrant graphic tote bag. Sturdy and stylish, it’s ideal for everyday use or as a gift.", price: 24.99, image: toteTwo },
  { id: "cap", name: "Stage Fright Baseball Cap", description: "This adjustable baseball cap features the iconic Stage Fright logo, making it a perfect accessory for fans. Designed for comfort and style, it’s suitable for any occasion.", price: 19.99, image: cap_front, backImage: cap_back },
  { id: "tokens", name: "Stage Fright Keychain Assortment", description: "A set of high-quality keychains showcasing unique Stage Fright designs. Great for personal use or sharing with fellow fans.", price: 9.99, image: tokens },
  { id: "bundle", name: "Accessory Bundle Package", description: "This all-in-one accessory bundle includes a tote, cap, and more fan-favorite items. The perfect way to show your love for Stage Fright.", price: 49.99, image: bundle_front, backImage: bundle_back },
  { id: "fanny", name: "Embellished Fanny Pack", description: "Keep your essentials close with this embellished Stage Fright fanny pack. Practical and stylish, it’s perfect for concerts and on-the-go adventures.", price: 34.99, image: fanny_front, backImage: fanny_back },
  { id: "vinyl", name: "Standard LP Vinyl Record", description: "Enjoy the classic Stage Fright album in rich vinyl sound. A must-have collector’s piece for audiophiles and fans alike.", price: 39.99, image: album1 },
  { id: "manuscript", name: "CD + Manuscript", description: "This exclusive bundle includes the album on CD and a collectible manuscript. A great choice for fans who love exclusive memorabilia.", price: 29.99, image: album2 },
  { id: "casette", name: "Standard Cassette", description: "Relive the nostalgia with the Stage Fright album on cassette. Compact and retro, it’s a unique way to enjoy your favorite tracks.", price: 14.99, image: album3 },
  { id: "cd", name: "Exclusive CD", description: "Experience the exclusive Stage Fright album on CD with crisp sound quality. A fan essential for any collection.", price: 19.99, image: album4 },
  { id: "ignition_vinyl", name: "Ignition 12-inch LP Vinyl", description: "Ignition, now available on premium vinyl for an unparalleled listening experience. This 12-inch LP features stunning audio fidelity and album art.", price: 44.99, image: record1 },
  { id: "lif_vinyl", name: "Lost in the Fire 13-inch Vinyl", description: "Celebrate the Lost in the Fire album with this special edition 13-inch vinyl. A true collector’s item with a unique design.", price: 49.99, image: record2 },
  { id: "surged_vinyl", name: "Surged Chaos Single 12-inch LP", description: "This limited-edition single vinyl captures the energy of Surged Chaos. A standout piece for fans and vinyl enthusiasts.", price: 39.99, image: record3 },
  
];



const ShopDetails = () => {
  const sqliteRef = useRef(null);	
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [selectedColor, setSelectedColor] = useState(null); // State for selected color
  const navigate = useNavigate();
  const [fetchedNumber, setFetchedNumber] = useState(null);
  

  useEffect(() => {
    const storedItemId = JSON.parse(localStorage.getItem("clickedItem"));
    if (storedItemId) {
      const selectedItem = items.find((item) => item.id === storedItemId);
      if (selectedItem) {
        setItem(selectedItem);
        setMainImage(selectedItem.image);
  
        // Set default size to medium
        if (sizes.length > 0) {
          setSelectedSize("M");
        }
  
        // Set default color and update the main image if applicable
        if (itemColors[selectedItem.id] && itemColors[selectedItem.id].length > 0) {
          const defaultColor = itemColors[selectedItem.id][0]; // Get the first color
          setSelectedColor(defaultColor);
  
          // Update main image for the selected color if applicable
          if (selectedItem.id === "shirt5" || selectedItem.id === "shirt6" || selectedItem.id === "shirt7") {
            const colorImage = itemImages[selectedItem.id][defaultColor];
            setMainImage(colorImage || selectedItem.image);
          }
        }
      } else {
        alert("Item not found!");
        navigate("/shop");
      }
    }
  }, [navigate, items, sizes, itemColors, itemImages]);
  

  // ? Fetch `number` column from SQLite when "Add to Cart" is clicked
  const fetchItemNumber = async () => {
    if (sqliteRef.current && sqliteRef.current.fetchDataByText) {
      const numberValue = await sqliteRef.current.fetchDataByText(item.id);
      setFetchedNumber(numberValue);
      return numberValue;
    }
    return null;
  };  

  //const handleAddToCart = () => {
  const handleAddToCart = async () => {
    if (!item) {
      alert("Item not found.");
      return;
    }
    if (item.id.startsWith("shirt") && !selectedSize) {
      alert("Please select a size.");
      return;
    }
    if (itemColors[item.id] && !selectedColor) {
      alert("Please select a color.");
      return;
    }

    // ? Fetch number value before adding to cart
    const itemNumber = await fetchItemNumber();

  
    let selectedItemImage = item.image;
    if (itemColors[item.id] && selectedColor) {
      selectedItemImage = itemImages[item.id][selectedColor];
    }
  
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = storedCart.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === selectedSize &&
        cartItem.color === selectedColor
    );
  
    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += quantity;
    } else {
      storedCart.push({
        ...item,
        quantity,
        size: selectedSize || "",
        color: selectedColor || "",
        image: selectedItemImage,
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(storedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    
	alert(`Added "${item.name}" to cart!\nFetched Number: ${itemNumber}`);    
  };
  

  if (!item) {
    return <p>Loading item details...</p>;
  }

  return (
    <div className="item-details">
    <SQLiteComponent ref={sqliteRef} />
      <CartSidebar />
      <div className="back_con">
        <button className="back_shop" onClick={() => navigate("/shop")}>
          ← Back to Shop
        </button>
      </div>
      <div className="item-details-sub">
        <div className="item-details-left">
          <h2 className="item-name">{item.name}</h2>
  
          <div className="main-image-container">
            <img
              src={mainImage}
              alt={`${item.name} Main`}
              className="main-image"
            />
          </div>
  
          <div className="thumbnail-container">
            <img
              src={item.image}
              alt={`${item.name} Front`}
              className="thumbnail"
              onClick={() => setMainImage(item.image)}
            />
            {item.backImage && (
              <img
                src={item.backImage}
                alt={`${item.name} Back`}
                className="thumbnail"
                onClick={() => setMainImage(item.backImage)}
              />
            )}
          </div>
        </div>
  
        <div className="item-details-right">
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          {item.id.startsWith("shirt") && ( // Only render for shirts
          <div className="size-options">
            <div className="size-boxes">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-box ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
  
          {/* Add color options only for shirt5, shirt6, and shirt7 */}
          {itemColors[item.id] && (
            <div className="color-options">
              <div className="color-boxes">
                {itemColors[item.id].map((color) => (
                  <button
                    key={color}
                    className={`color-box ${selectedColor === color ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setSelectedColor(color);
                      if (item.id === "shirt5" || item.id === "shirt6" || item.id === "shirt7") {
                        const colorImage = itemImages[item.id][color];
                        setMainImage(colorImage);
                      }
                    }}
                  >
                  </button>
                ))}
              </div>
            </div>
          )}
  
          <div className="cart-controls">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <br />
            <button className="add_cart" onClick={handleAddToCart}>
              Add to Cart - ${(item.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
  
};

export default ShopDetails;