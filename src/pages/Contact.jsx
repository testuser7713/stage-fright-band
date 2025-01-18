import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faInstagram, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Details:', details);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName(' ');
    setEmail('');
    setSubject('');
    setDetails('');
    setSubmitted(false);
  };

  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [pickupName, setPickupName] = useState("");
  const [pickupName2, setPickupName2] = useState("");
  const [pickupTimes, setPickupTimes] = useState([]);

  const handleDeliveryOptionChange = (option) => {
      setDeliveryOption(option);
  };


  useEffect(() => {
    const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentTime = new Date();
  
    const generatePickupTimes = () => {
      const weekdayTimes = [
        "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30",
        "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30",
        "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00",
        "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15",
        "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30",
        "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45",
        "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00",
        "12:15", "12:30"
      ];
  
      const weekendTimes = [
        "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00",
        "12:15", "12:30", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30",
        "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45",
        "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00",
        "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15",
        "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15",
        "11:30", "11:45", "12:00", "12:15", "12:30"
      ];
  
      let availableTimes = [];

      if (currentDay >= 1 && currentDay <= 5) {
        availableTimes = weekdayTimes;
      } else if (currentDay === 0 || currentDay === 6) {
        availableTimes = weekendTimes;
      }
  
      // Convert all times to 24-hour format
      const allTimes = availableTimes.map(time => {
        const [hours, minutes] = time.split(":");
        return `${parseInt(hours, 10) < 10 ? '0' : ''}${hours}:${minutes}`;
      });
  
      // Filter out duplicates
      const uniqueTimes = Array.from(new Set(allTimes));
  
      // Filter out times that are earlier than the current time + 10 minutes
      const cutoffTime = new Date(currentTime.getTime() + 10 * 60000); // 10 minutes in the future
      const [cutoffHour, cutoffMinute] = cutoffTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(":");
      const cutoffMinutes = parseInt(cutoffHour, 10) * 60 + parseInt(cutoffMinute, 10);
  
      availableTimes = uniqueTimes.filter(time => {
        const [hours, minutes] = time.split(":");
        const timeMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
        return timeMinutes >= cutoffMinutes;
      });
  
      setPickupTimes(availableTimes);
    };
  
    generatePickupTimes();
  }, []);

  return (
    <div className="contact_page">
        <div className="contact_container">
            <div className="contact_left">
                <h2 className="inquiry_text">SUBMIT AN INQUIRY</h2>
                <div className="contact_form">
                    <div className="form">
                    {submitted ? (
                    <div className="contact_after">
                        <p>Thank you for contacting us! <br></br>Our team will reach out soon with further information.</p>
                        
                        <button className="reset" onClick={handleReset}>Submit Another Response</button>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="entry_field">
                            <label className="input_label" htmlFor="name">Name</label>
                            <br></br>
                            <input
                                type="text"
                                autoComplete='none'
                                id="name"
                                className="input"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="entry_field">   
                            <label className="input_label" htmlFor="email">Email</label>
                            <br></br>
                            <input
                                type="email"
                                autoComplete='none'
                                id="email"
                                className="input"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="entry_field">
                            <label className="input_label" htmlFor="subject">Subject</label>
                            <br></br>
                            <select
                                id="subject"
                                required
                                value={subject}
                                className="subject"
                                onChange={(e) => setSubject(e.target.value)}
                            >
                                <option value="">Select...</option>
                                <option value="booking">Booking</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="general">Sponsorship</option>
                                <option value="lime1">Promotion and Press</option>
                                <option value="lime2">Feedback</option>

                            </select>
                        </div>
                        <div className="entry_field">
                            <label className="input_label" htmlFor="details">Please share more details</label>
                            <br></br>
                            <textarea
                                type="text"
                                id="details"
                                autoComplete='none'
                                required
                                className="input"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                
                            />
                        </div>
                        
                        <button type="submit" className="button">Submit</button>
                        
                        
                    </form>
                    )}
                </div>
                </div>

            </div>
            <div className="contact_right">
                <h2 className="inquiry_text">CONTACT</h2>
                <p className="contact_p">stagefright@globalmedia.com</p>

                <h2 className="contact_heading">BASED IN</h2>
                <p className="contact_p">Dallas, Texas</p>

                {/* Social Media */}
                <div className="social-media">
                <h3 className="contact_heading">FOLLOW US:</h3>
                <div className="social_links">
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                        <p href="https://www.instagram.com/stagefright" target="_blank" rel="noopener noreferrer">Instagram: @stagefright</p>

                    </div>
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faXTwitter} />
                        <p href="https://www.twitter.com/name" target="_blank" rel="noopener noreferrer">Twitter: @stage_fright</p>

                    </div>
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                        <p href="https://www.facebook.com/name" target="_blank" rel="noopener noreferrer">Facebook: @sf_band</p>

                    </div>
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faSpotify} />
                        <p href="https://www.spotify.com/name" target="_blank" rel="noopener noreferrer">Spotify: @stagefright</p>

                    </div>

                    
                </div>
                </div>

            </div>
            {/*<div className="order_type">
              <div className="options">
                <div className="delivery_btn_con">
                  <label htmlFor="delivery">
                    <button
                      onClick={() => handleDeliveryOptionChange("delivery")}
                      className={`delivery_btn ${deliveryOption === "delivery" ? "active1" : ""}`} >
                      <input
                        type="radio"
                        id="delivery"
                        name="orderType"
                        value="delivery"
                        className="delivery_radio"
                        checked={deliveryOption === "delivery"}
                        onChange={() => handleDeliveryOptionChange("delivery")}
                      />
                      Submit an Inquiry
                    </button>
                  </label>
                </div>
                <div className="pickup_btn_con">
                  <label htmlFor="pickup">
                    <button
                      onClick={() => handleDeliveryOptionChange("pickup")}
                      className={`pickup_btn ${deliveryOption === "pickup" ? "active1" : ""}`} >
                      <input
                        type="radio"
                        id="pickup"
                        name="orderType"
                        value="pickup"
                        className="pickup_radio"
                        checked={deliveryOption === "pickup"}
                        onChange={() => handleDeliveryOptionChange("pickup")}
                      />
                      <label for="pickup">Booking Request</label>
                    </button>
                  </label>
                </div>



              </div>


              {deliveryOption === "delivery" && (
                <div className="form">
                {submitted ? (
                <div className="contact_after">
                    <p>Thank you for contacting us! <br></br>Our team will reach out soon with further information.</p>
                    
                    <button className="reset" onClick={handleReset}>Submit Another Response</button>
                </div>
                ) : (
                <form onSubmit={handleSubmit}>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="name">Name</label>
                        <br></br>
                        <input
                            type="text"
                            autoComplete='none'
                            id="name"
                            className="input"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="entry_field">   
                        <label className="input_label" htmlFor="email">Email</label>
                        <br></br>
                        <input
                            type="email"
                            autoComplete='none'
                            id="email"
                            className="input"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="subject">Subject</label>
                        <br></br>
                        <select
                            id="subject"
                            required
                            value={subject}
                            className="subject"
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="">Select...</option>
                            <option value="booking">Booking</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="general">Sponsorship</option>
                            <option value="lime1">Promotion and Press</option>
                            <option value="lime2">Feedback</option>

                        </select>
                    </div>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="details">Please share more details</label>
                        <br></br>
                        <textarea
                            type="text"
                            id="details"
                            autoComplete='none'
                            required
                            className="input"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            
                        />
                    </div>
                    
                    <button type="submit" className="button">Submit</button>
                    
                    
                </form>
                )}
            </div>
              )}

              {deliveryOption === "pickup" && (
                <div className="pickup_con">
                  <div className="pickup_grid">
                    <div className="pickup_time">
                      <label htmlFor="subject" className="pickup_text">Choose Pickup Time:</label>
                    <select
                      id="subject"
                      className="input"
                      required
                    >
                      <option value="">Select...</option>
                      {pickupTimes.map((time, index) => (
                        <option key={index} value={time}>{time}
                          {parseInt(time.split(":")[0], 10) < 12 ? "pm" : "am"}
                        </option>
                        
                      ))}
                    </select>
                    </div>
                    <div className="pickup_name">
                      <div>
                        <label htmlFor="pickup_name1">First Name:</label>
                        <br></br>
                        <input
                          type="text"
                          id="pickupName"
                          value={pickupName}
                          onChange={(e) => setPickupName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="pickupTime2">Last Name:</label>
                        <br></br>
                        <input
                          type="text"
                          id="pickupName2"
                          value={pickupName2}
                          onChange={(e) => setPickupName2(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="pickup_contact">
                      <div className="pickup_email">
                        <label htmlFor="email">Email:</label>
                        <br></br>
                        <input
                          type="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="pickup_phone">
                        <label htmlFor="pickupPhone">Phone Number:</label>
                        <br></br>
                        <input
                          type="tel"
                          id="pickupPhone"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            </div>}*/}
        </div>

    </div>

  );
}

export default Contact;