import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
  return (
    <div className="footer_container">
      <div className="footer_sub">
        <p>CTE BPA Chapter</p>
      </div>
      <div className="footer_sub">
        <p>Shriya Kaza: 00134914</p>
        <p>Hasini Mandapati: 00135274</p>
        <p>Mahi Shah: 00134868</p>
      </div>
      <div className="footer_sub">
        <p>Theme: Stage Fright- Alternative Indie Rock Band Site</p>
        <p>School: Centennial High School</p>
        
        
      </div>
      <div className="footer_sub">
        <p>City: Frisco</p>
        <p>State: Texas</p>
        <p>Year: 2024</p>
        
      </div>
    </div>
  );
};