import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/sf_logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobile(false); // Close menu after clicking a link
  };

  // Close menu when clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".navbar") === null) {
        setIsMobile(false); // Close the menu if click is outside navbar
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar_container">
      <div className="navbar">
        {/* Left Side Items (for larger screens) */}
        <div className="left-tabs">
          <ul className={`navbar-items ${isMobile ? "mobile" : ""}`}>
            <Link className="item" to="/home" onClick={scrollToTop}>
              <h3>HOME</h3>
            </Link>
            <Link className="item" to="/tour_main" onClick={scrollToTop}>
              <h3>TOUR</h3>
            </Link>
            <Link className="item" to="/shop" onClick={scrollToTop}>
              <h3>SHOP</h3>
            </Link>
          </ul>
        </div>

        {/* Logo */}
        <div className="logo-container">
          <Link to="/home" onClick={scrollToTop}>
            <img src={Logo} alt="logo" className="logo" loading="lazy" />
          </Link>
        </div>

        {/* Right Side Items (for larger screens) */}
        <div className="right-tabs">
          <ul className={`navbar-items ${isMobile ? "mobile" : ""}`}>
            <Link className="item" to="/music" onClick={scrollToTop}>
              <h3>MUSIC</h3>
            </Link>
            <Link className="item" to="/media" onClick={scrollToTop}>
              <h3>MEDIA</h3>
            </Link>
            <Link className="item" to="/contact" onClick={scrollToTop}>
              <h3>CONTACT</h3>
            </Link>
          </ul>
        </div>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${isMobile ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu - Merged Left and Right Tabs */}
      {isMobile && (
        <div className="mobile-menu">
          <ul className="navbar-items mobile">
            {/* Left Tabs */}
            <Link className="item" to="/home" onClick={scrollToTop}>
              <h3>HOME</h3>
            </Link>
            <Link className="item" to="/tour_main" onClick={scrollToTop}>
              <h3>TOUR</h3>
            </Link>
            <Link className="item" to="/shop" onClick={scrollToTop}>
              <h3>SHOP</h3>
            </Link>

            {/* Right Tabs */}
            <Link className="item" to="/music" onClick={scrollToTop}>
              <h3>MUSIC</h3>
            </Link>
            <Link className="item" to="/media" onClick={scrollToTop}>
              <h3>MEDIA</h3>
            </Link>
            <Link className="item" to="/contact" onClick={scrollToTop}>
              <h3>CONTACT</h3>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
