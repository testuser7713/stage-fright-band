import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg"
import "./Navbar.css";



export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
  return (
    <div className="navbar_container">
      
      <div className="navbar">
        
        <ul className="navbar-items">
          <Link className="item" tabIndex={2} to="/home" onClick={scrollToTop}>
            <h3>HOME</h3>
          </Link>
          <Link className="item" tabIndex={3} to="/tour" onClick={scrollToTop}>
            <h3>TOUR</h3>
          </Link>
          <Link className="item" tabIndex={4} to="/shop" onClick={scrollToTop}>
            <h3>SHOP</h3>
          </Link>
          <Link className="item1" tabIndex={1} to="/home">
            <img src={Logo} alt="logo" className="logo" loading="lazy" onClick={scrollToTop}></img>
          </Link>
          
          <Link className="item" tabIndex={5} to="/music" onClick={scrollToTop}>
            <h3>MUSIC</h3>
          </Link>
          <Link className="item" tabIndex={6} to="/media" onClick={scrollToTop}>
            <h3>MEDIA</h3>
          </Link>
          <Link className="item" tabIndex={6} to="/contact" onClick={scrollToTop}>
            <h3>CONTACT</h3>
          </Link>
        </ul>
      </div>
    </div>
  );
};