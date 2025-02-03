import { useState } from 'react'
//import './App.css'
import { Routes, Route, HashRouter} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tour from "./pages/Tour.jsx";
import Tour_Main from "./pages/Tour_Main.jsx"
import Shop from "./pages/Shop";
import Music from "./pages/Music"
import Media from "./pages/Media"
import Contact from "./pages/Contact"
import ShopDetails from "./pages/ShopDetails.jsx"
import Checkout from "./pages/Checkout.jsx"
import test from "./pages/test.jsx"

import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true);

  return (
    <div className="body">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/tour_main" element={<Tour_Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/music" element={<Music />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/test" element={<test />} />

        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;
