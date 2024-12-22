
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

import CartSidebar from "../components/CartSideBar";
import "../pages/ShopDetails.css"

const items = [
  { id: "shirt1", name: "Stage Fright Classic Longsleeve", description: "This comfortable long-sleeve shirt features a timeless Stage Fright design, perfect for cooler days. Made from soft, breathable fabric, it’s a stylish choice for any fan.", price: 29.99, image: Shirt1_front, backImage: Shirt1_back },
  { id: "shirt2", name: "Stage Fright Zip-Up Sweatshirt", description: "Stay warm in style with this Stage Fright zip-up sweatshirt, complete with a sleek logo design. Ideal for layering, it combines comfort and fashion effortlessly.", price: 29.99, image: Shirt2_front, backImage: Shirt2_back },
  { id: "shirt3", name: "Stage Fright Classic Graphic Tee", description: "A must-have for fans, this graphic tee showcases bold Stage Fright artwork. Lightweight and versatile, it's great for casual outings or concerts.", price: 29.99, image: Shirt3_front, backImage: Shirt3_back },
  { id: "shirt4", name: "Stage Fright Classic Black Tee", description: "This classic black tee highlights the Stage Fright logo in a clean and minimalist style. Perfect for everyday wear, it pairs well with any outfit.", price: 29.99, image: Shirt4_front, backImage: Shirt4_back },
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
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity selection
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(null); // State for main image




  useEffect(() => {
    const storedItemId = JSON.parse(localStorage.getItem("clickedItem"));
    if (storedItemId) {
      const selectedItem = items.find((item) => item.id === storedItemId);
      if (selectedItem) {
        setItem(selectedItem);
        setMainImage(selectedItem.image)
      } else {
        alert("Item not found!");
        navigate("/shop");
      }
    }
  }, [items, navigate]);

  const handleAddToCart = () => {
    if (!item) return;
  
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = storedCart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += quantity;
    } else {
      storedCart.push({ ...item, quantity });
    }
  
    localStorage.setItem("cart", JSON.stringify(storedCart));
    // Trigger custom event to open the cart sidebar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!item) {
    return <p>Loading item details...</p>;
  }

  return (
    <div className="item-details">
      <CartSidebar />
      <div className="back_con">
        <button className="back_shop" onClick={() => navigate("/shop")}>← Back to Shop</button>
      </div>
      <div className="item-details-sub">
        <div className="item-details-left">
          <h2 className="item-name">{item.name}</h2>
          <div className="main-image-container">
            <img src={mainImage} alt={`${item.name} Main`} className="main-image" />
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
                onClick={() => {
                  console.log("Clicked on back image");
                  setMainImage(item.backImage);
                }}
              />
            )}

          </div>
        </div>
        <div className="item-details-right">
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>

          <div className="cart-controls">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <br></br>
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