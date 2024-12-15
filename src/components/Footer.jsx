import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
  return (
    <div className="footer_container">
    </div>
  );
};