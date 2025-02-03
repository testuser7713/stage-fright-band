import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"
import tour_cover from "../assets/lif_tour.png"
const Checkout = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [cart, setCart] = useState([]);
      const navigate = useNavigate();
      const [showModal, setShowModal] = useState(false);

      const [seat, setSeat] = useState(null);
      const[price, setPrice] = useState(null);
      

      const handlePlaceOrder = (e) => {
        e.preventDefault(); 
        localStorage.removeItem("cart");
        localStorage.removeItem("seat");
        setCart([]);
        setSeat(null); // Clears the seat state
        setPrice(null)

        setShowModal(true);
      };

      const handleModalClose = () => {
        setShowModal(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });


        navigate("/shop");
      }
    
      const fetchCart = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const storedSeat = localStorage.getItem("seat"); 
        const cleanedSeat = storedSeat ? storedSeat.replace(/^"|"$/g, '') : null; 
        const price = localStorage.getItem("price")
        setCart(storedCart);
        setSeat(cleanedSeat); 
        setPrice(price)
      };
    
      // Effect to initialize cart and listen for storage changes
      useEffect(() => {
        fetchCart(); // Load initial cart state
    
        const handleStorageChange = () => {
          fetchCart(); // Refresh cart when localStorage changes
        };
    
        window.addEventListener("storage", handleStorageChange);
    
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
      }, []);

    
      const calculateTotal = () => {
        const baseTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const seatCost = seat ? Number(price) : 0; // Ensure price is a number
        const total = seatCost + baseTotal
        return total;  // Add the seat cost if applicable
      };
    
      const removeItem = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); // Remove the item at the given index
        setCart(updatedCart); // Update the state
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save changes to localStorage
      };

      const removeSeat = () => {
        localStorage.removeItem("seat"); // Remove seat from localStorage
        setSeat(null); // Update state to reflect removal
      };
  const [step, setStep] = useState(1); // 1 for Billing, 2 for Payment

  const handleNextStep = () => {
    setStep(2); // Move to the payment section
  };

  const handlePrevStep = () => {
    setStep(1); // Go back to the billing section
  };

  return (
    <div className="checkout_page">
        <h1 className="test">hi</h1>
        <div className="back_conn">
          <button className="back_shopp" onClick={() => navigate("/shop")}>← Back to Shop</button>
        </div>

      <div className="checkout-form-row">
        <div className="checkout-form-col-75">
          <div className="checkout-form-container">
            <form action="/action_page.php">
              <div className="checkout-form-row-over">
                {step === 1 ? (
                  <div className="checkout-form-col-50">
                    <h3 className="checkout-form-section-heading">Billing Address</h3>
                    <label className="checkout-form-label" htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" className="checkout-form-input" />
                    <label className="checkout-form-label" htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com" className="checkout-form-input" />
                    <label className="checkout-form-label" htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" className="checkout-form-input" />
                    <label className="checkout-form-label" htmlFor="city"><i className="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="New York" className="checkout-form-input" />
                    <div className="checkout-form-row-state">
                      <div className="checkout-form-col-50">
                        <label className="checkout-form-label" htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder="NY" className="checkout-form-input" />
                      </div>
                      <div className="checkout-form-col-50">
                        <label className="checkout-form-label" htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="10001" className="checkout-form-input" />
                      </div>
                    </div>
                    <button type="button" className="checkout-form-next-btn" onClick={handleNextStep}>Next →</button>
                  </div>
                ) : (
                  <div className="checkout-form-col-50">
                    <h3 className="checkout-form-section-heading">Payment</h3>
                    <div className="checkout-form-icon-container">
                      <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                      <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                      <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                      <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                    </div>
                    <label className="checkout-form-label" htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" className="checkout-form-input" />
                    <label className="checkout-form-label" htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" className="checkout-form-input" />
                    <label className="checkout-form-label" htmlFor="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" className="checkout-form-input" />
                    <div className="checkout-form-row-state">
                      <div className="checkout-form-col-50">
                        <label className="checkout-form-label" htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018" className="checkout-form-input" />
                      </div>
                      <div className="checkout-form-col-50">
                        <label className="checkout-form-label" htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352" className="checkout-form-input" />
                      </div>
                    </div>
                    <button type="button" className="checkout-form-back-btn" onClick={handlePrevStep}>← Back</button>
                  </div>
                )}
              </div>

              {step === 2 && (
                <input type="submit" value="Place Order" className="checkout-form-btn" onClick={handlePlaceOrder} />
              )}
            </form>
          </div>
        </div>
        <div className="checkout-form-col-25">
          <div className="checkout-form-container">
        {cart.length === 0 ? (
          <p></p>
        ) : (
          <div className="cart_item_con">
            {cart.map((item, index) => (
              <div className="cart_item" key={index}>
                <img className="cart_img2" src={item.image} alt={item.name} />
                <div className="item_details2">
                  <p>{item.name}</p>

                  {/* Display size if available */}
                  {item.size && (
                    <p className="item-size">Size: {item.size}</p>
                  )}

                  {/* Display color if available 
                  {item.color && (
                    <p className="item-color">Color: {item.color}</p>
                  )} */}

                  <div className="cart_sub">
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="price_con2">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="trash2"
                    icon={faTrashCan}
                    onClick={() => removeItem(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
          {seat && (
          <div className="cart_item_con">
            <div className="cart_item" >
              <img className="cart_img2" src={tour_cover}  />
              <div className="item_details2">
                <p>Selected Seat: {seat}</p>
                <div className="cart_sub">
                  <p>Quantity: 1</p>
                </div>
              </div>
              <div className="price_con2">
                <p>${price}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="trash2"
                  icon={faTrashCan}
                  onClick={removeSeat}
                  
                />
              </div>
            </div>
          
        </div>
          )}
        
        <h3 className="total-price">Subtotal: ${(calculateTotal()*1).toFixed(2)}</h3>
        <p className="tax">Tax: ${(calculateTotal()*0.0825).toFixed(2)}</p>
        <h3 className="total-price">Total: ${(calculateTotal()*1.0825).toFixed(2)}</h3>
          </div>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-x-button" onClick={handleModalClose} >X</button>
              <h2>Order Placed!</h2>
              <p>Your order has been placed successfully!</p>
              <button onClick={handleModalClose} className="modal-close-btn">
                Back to Shop
              </button>
            
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
