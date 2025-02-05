import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import Shop_Bar from "../components/New_Shop_Bar"
import Longsleeve_Bar from "../components/Longsleeve_bar.jsx"

import tour_back from "../assets/tour_back.png"
import shirts_back from "../assets/shirts_back.png"
import "./Shop.css"
import shirt from "../assets/merch1.png"
import tote from "../assets/tote.png"
import music_merch from "../assets/music_merch_new.png"
import vinyl from "../assets/vinyl.png"

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
import album2 from "../assets/middle_alb.png"
import album3 from "../assets/albums (3).png"
import album4 from "../assets/album4 (1).png"

import record1 from "../assets/record1.png"
import record2 from "../assets/record2.png"
import record3 from "../assets/record3.png"

import CartSidebar from "../components/CartSideBar";

import line1 from "../assets/line1.png"
import line2 from "../assets/line2.png"




function Shop() {
    const navigate = useNavigate();

    const handleImageClick = (id) => {
        localStorage.setItem("clickedItem", JSON.stringify(id));
        navigate("/shopdetails")
      };

    const shirtsRef = useRef(null);
    const longsleevesRef = useRef(null);
    const accessoriesRef = useRef(null);
    const musicRef = useRef(null);
    const recordsRef = useRef(null);
    
    const scrollToSection = (ref) => {
        const yOffset = -160; // Adjust this value for the desired offset
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <div className="shop_page">

            <div className="lines">
                <div>
                <h1 className="merch_text">Merch</h1>
                <h3 className="latestt">Shop the Latest</h3>
                </div>

            </div>
            <div className="shop_navbar_con">
            <div className="shop_navbar">
                <button onClick={() => scrollToSection(shirtsRef)}>Shirts</button>
                <button onClick={() => scrollToSection(longsleevesRef)}>Longsleeves</button>
                <button onClick={() => scrollToSection(accessoriesRef)}>Accessories</button>
                <button onClick={() => scrollToSection(musicRef)}>Music</button>
                <button onClick={() => scrollToSection(recordsRef)}>Exclusive Records</button>
            </div>
            </div>

            <div className="top_con">
            <CartSidebar />
                <div className="top_section">
                    <div className="tour_image">
                        <img src={tour_back}></img>
                    </div>
                    <div className="shop_items">
                        <div className="shop_header_con">
                            <h3 className="shop_header" id="shirts" ref={shirtsRef}>SHIRTS</h3>
                        </div>
                        
                        <Shop_Bar></Shop_Bar>
                        <div className="shop_header_con">
                            <h3 className="shop_header" id="longsleeves" ref={longsleevesRef}>LONGSLEEVES</h3>
                        </div>
                        <Longsleeve_Bar></Longsleeve_Bar>
                    </div>
                    <div className="merch_image">
                        <img src={shirts_back}></img>
                    </div>
                </div>
            </div>
            <div className="mid_con">
                
                
                <div className="mid_section">
                    <div>
                    <div className="acc_conn">
                        <h3 className="shop_header" id="accessories" ref={accessoriesRef}>ACCESSORIES</h3>
                    </div>

                    
                    
                    <div className="mid_left_sec">
                        
                        <div className="mid_item_con">
                            <div className="mid_item">
                                <img src={toteOne} id="toteOne" onClick={() => handleImageClick("toteOne")}></img>
                                <p className="merch_label">Stage Fright Classic Tote</p>

                            </div>


                        </div>
                        
                        <div className="mid_item_con">
                            <div className="mid_item">
                                <img src={toteTwo} id="toteTwo" onClick={() => handleImageClick("toteTwo")}></img>
                                <p className="merch_label">Stage Fright Graphic Tote</p>

                            </div>
                        </div>
                        
                        <div className="mid_item_con">
                            <div className="mid_item_new">
                                <div className="image-wrapper" onClick={() => handleImageClick("cap")}>
                                    <img className="shop_front" src={cap_front}></img>
                                    <img className="shop_back" src={cap_back} id="cap" ></img>
                                    
                                </div>
                                <p className="merch_label">Stage Fright Baseball Cap</p>

                            </div>
                        </div>
                        
                        <div className="mid_item_con">
                            <div className="mid_item" onClick={() => handleImageClick("tokens")}>
                                <img src={tokens} id="tokens" ></img>
                                <p className="merch_label">Stage Fright Keychain Assortment</p>

                            </div>
                        </div>
                        
                        <div className="mid_item_con">
                            <div className="mid_item_new">
                                <div className="image-wrapper" onClick={() => handleImageClick("bundle")}>
                                    <img className="shop_front" src={bundle_front}></img>
                                    <img className="shop_back" src={bundle_back} id="bundle" ></img>
                                </div>
                                <p className="merch_label">Accessory Bundle Package</p>

                                
                            </div>
                        </div>
                        
                        <div className="mid_item_con">
                            <div className="mid_item_new">
                                <div className="image-wrapper" onClick={() => handleImageClick("fanny")}>
                                    <img className="shop_front" src={fanny_front}></img>
                                    <img className="shop_back" src={fanny_back} id="fanny" ></img>
                                </div>
                                <p className="merch_label">Embellished Fanny Pack</p>

                                
                            </div>
                        </div>
                        </div>
                        

                    </div>
                    
                    
                </div>
                <img className="tote" src={tote}></img>
            </div>

            <div className="music_merch_con">
                <img className="music_merch" src={music_merch}></img>
                
                <div className="music_right_con">
                    <div className="acc_conn">
                        <h3 className="shop_headerr" id="music" ref={musicRef}>MUSIC</h3>
                    </div>
                    <div className="music_merch_right_con">
                        
                        
                        <div className="music_merch_right">
                            <div className="music_item_con">
                                <div className="music_item">
                                    <img src={album1} id="vinyl" onClick={() => handleImageClick("vinyl")}></img>
                                    <p className="">Standard LP Vinyl Record</p>

                                    

                                </div>
                                
                            </div>
                            <div className="music_item_con">
                                <div className="music_item">
                                    <img src={album2} id="manuscript" onClick={() => handleImageClick("manuscript")}></img>
                                    <p className="">CD + Manuscript</p>
                                    
                                </div>
                            </div>
                            <div className="music_item_con">
                                <div className="music_item">
                                    <img src={album3} id="casette" onClick={() => handleImageClick("casette")}></img>
                                    <p className="">Standard Casette</p>
                                    
                                </div>
                            </div>
                            <div className="music_item_con">
                                <div className="music_item">
                                    <img src={album4} id="cd" onClick={() => handleImageClick("cd")}></img>
                                    <p className="">Exclusive CD</p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="acc_con">
                <h3 className="shop_headerr" id="exclusive-records" ref={recordsRef}>EXCLUSIVE RECORDS</h3>
            </div>
            <div className="records_con">
                

                <img className="vinyl" src={vinyl} />
                
                <div className="records_right">
                    <div className="records_right_con">
                        <div>
                        <div className="record_item_con" id="one">
                            <div className="record_item">
                                <div className="record_sub">
                                <img className="record_img" src={record1} id="ignition_vinyl" onClick={() => handleImageClick("ignition_vinyl")}></img>
                                </div>
                                <div className="record_text_con">
                                    <p>Ignition 12-inch LP Vinyl</p>
                                </div>

                            </div>
                        </div>
                        <div className="record_item_con" id="four">
                            <div className="record_item">
                                <div className="record_sub">
                                    <img className="record_img" src={record3} id="surged_vinyl" onClick={() => handleImageClick("surged_vinyl")}></img>
                                </div>
                                <div className="record_text_con">
                                    <p>Surged Chaos Single 12-inch LP</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        </div>
                        
                        <div className="record_item_con" id="five">
                            <div className="record_item">
                                <div className="record_sub"> 
                                    <img className="record_img" src={record2} id="lif_vinyl" onClick={() => handleImageClick("lif_vinyl")}></img>
                                </div>
                                <div className="record_text_con">
                                    <p>Lost in the Fire 13-inch Vinyl</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        
        </div>
    )
}
export default Shop;