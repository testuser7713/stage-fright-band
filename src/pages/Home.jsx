import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/stage_background.svg"
import Band_Sil from "../assets/band_sil (2).png"
import Flame from "../assets/new_flame.png"
import album1 from "../assets/albums.png"
import album2 from "../assets/albums (1).png"
import album3 from "../assets/albums (3).png"
import "./Home.css"
import Timer from "../components/Timer.jsx"
import Smoky from "../assets/smoky.mp4"
import Stripe from "../assets/stripe (2).png"
import Spotlight from "../assets/spotlight.png"
import ReactCardFlip from "react-card-flip";
import Merch1 from "../assets/merch1.png"
import Merch2 from "../assets/merch2.png"
import Merch3 from "../assets/merch3.png"
import Shop_Bar from "../components/Shop_Bar.jsx"
import Background_Vid from "../assets/stage_edited.mp4"

function Home() {
    const [isFlipped, setIsFlipped] = useState(false);
    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      if (currentIndex < items.length - 3) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    return (
        <div className="home_page">
            <div className="header_sec">
                <div className="home_overlay">
                    <video src={Background_Vid} autoPlay loop muted controls className="video" />
                    <div className="text">
                        <h2 className=""><strong className="stage">STAGE</strong> <br></br><strong className="fright">FRIGHT</strong></h2>
                        
                    </div>
                </div>
                <img src={Band_Sil} className="band_sil"/>

            </div>
            <div className="out_now">
                <div className="flame1">
                    <div className="albums_text">
                        <h2 className="lost">LOST IN THE FIRE</h2>
                        <h3 className="out_now_text">Out Now</h3>
                    </div>
                    <img src={Flame} className="flame" />
                    
                    <div className="albums_outer">
                        
                        
                        <div className="albums">
                            <img src = {album1} className="album_item"/>
                            <img src = {album2} className="album_item"/>
                            <img src = {album3} className="album_item"/>
                        </div>
                    </div>
                </div>
                
                

            </div>
            <div className="tour">
                <div className="until">
                    <h4>Until Tour</h4>
                </div> 
                <div className="timer_cont">
                    <Timer />
                </div>
                
                <div className="tour_1">
                    <img src={Stripe} className="stripe" />
                    <div className="tour_dates">
                    <div className="tour_con">
                        <div className="dates_outer">
                        <div className="dates">
                            {/* Repeatable blocks for each tour date */}
                            <div className="date">
                            <div className="date_texts">
                                <h3 className="date_label">Dec 28, 2024</h3>
                                <h4 className="loc_label">American Airlines Center</h4>
                            </div>
                            <div className="location">
                                <h3 className="area">Dallas, TX</h3>
                            </div>
                            <div className="tickets">
                                <button className="ticket_button">Buy Tickets</button>
                            </div>
                            </div>

                            {/* Add additional date blocks as needed */}
                            <div className="date">
                            <div className="date_texts">
                                <h3 className="date_label">Dec 28, 2024</h3>
                                <h4 className="loc_label">American Airlines Center</h4>
                            </div>
                            <div className="location">
                                <h3 className="area">Dallas, TX</h3>
                            </div>
                            <div className="tickets">
                                <button className="ticket_button" href="">Buy Tickets</button>
                            </div>
                            </div>

                            <div className="date">
                            <div className="date_texts">
                                <h3 className="date_label">Dec 28, 2024</h3>
                                <h4 className="loc_label">American Airlines Center</h4>
                            </div>
                            <div className="location">
                                <h3 className="area">Dallas, TX</h3>
                            </div>
                            <div className="tickets">
                                <button className="ticket_button">Buy Tickets</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                

            </div>
            
            <div className="about">
                <img className="spotlight_left" src={Spotlight}></img>
                <img className="spotlight_right" src={Spotlight}></img>
                
                <div className="about_sec">
                    <div className="about_left">
                        <div className="about_text">
                            <h2 className="about_label">ABOUT</h2>
                            <h3 className="band_label">Stage Fright</h3>
                        </div>
                        <div className="about_desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                        </div>
                    </div>
                    <div className="about_right">
                        <div className="about_right_con">
                            <div className="card_1">
                            </div>

                            <div className="card_2">
                                <h2>hi</h2>
                            </div>
                            <div className="card_3">
                                <h2>hi</h2>
                            </div>
                            <div className="card_4">
                                <h2>hi</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop">
                <div className="shop_con">
                    <div className="shop_text_con">
                        <div className="shop_text">
                            <h2 className="about_label">MERCH</h2>
                            <h3 className="latest_label">Shop the Latest</h3>
                        </div>
                    </div>
                    
                    <div className="items">
                        <Shop_Bar></Shop_Bar>
                    </div>
                </div>
                
            </div>

            
        </div>
    )
}

export default Home;