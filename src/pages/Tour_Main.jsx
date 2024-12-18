import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

import "./Tour_Main.css"
import tour_banner from "../assets/tour_banner.png"

function Tour_Main() {
    const navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate("/tour")
    }

    return (
        <div className="tour_main_page">
            <div className="tour_top_sec">
                <img src = {tour_banner} className="tour_banner"/>
                <div className="tour_banner_text">
                    <h2>Lost in the Fire Tour</h2>
                    <h3>BOOK NOW</h3>
                </div>
            </div>
            <div>
                <div className="tour_1">
                    <div className="tour_dates_2">
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
                                <button className="ticket_button" onClick={handleClick}>Buy Tickets</button>
                            </div>
                            </div>

                            {/* Add additional date blocks as needed */}
                            <div className="date">
                            <div className="date_texts">
                                <h3 className="date_label">Dec 29, 2024</h3>
                                <h4 className="loc_label">Toyota Music Factory</h4>
                            </div>
                            <div className="location">
                                <h3 className="area">Dallas, TX</h3>
                            </div>
                            <div className="tickets">
                                <button className="ticket_button" onClick={handleClick}>Buy Tickets</button>
                            </div>
                            </div>

                            <div className="date">
                            <div className="date_texts">
                                <h3 className="date_label">Dec 31, 2024</h3>
                                <h4 className="loc_label">House of Blues Concert</h4>
                            </div>
                            <div className="location">
                                <h3 className="area">Dallas, TX</h3>
                            </div>
                            <div className="tickets">
                                <button className="ticket_button" onClick={handleClick}>Buy Tickets</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tour_Main;