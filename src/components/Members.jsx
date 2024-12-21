import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Members.css";



export default function Members() {

  return (
    <div className="members_container">
        <div className="mem_sub_container">
        <div>
            <div className="content">
                <h2>Kieran</h2>
                <span>Lead Guitar, Backing Vocals</span>
                <p>Is a perfectionist, delivers intricate solos that define the band’s sound. Raised on Hendrix and Zeppelin, he combines technical skill with creative riffs and musical creativity.</p>

            </div>
        </div>
        <div>
            <div className="content">
            <h2>Vega</h2>
            <span>Lead Vocals, Rhythm Guitar</span>
            <p>The bold and fiery frontwoman with a raspy, commanding voice. She grew up singing in church but gravitated toward edgier rock influences like her inspiration, Joan Jett.</p>

            </div>
        </div>
        <div>
            <div className="content">
            <h2>Lana</h2>
            <span>Drums</span>
            <p>Lana’s explosive drumming drives the band’s high-energy performances. With a warm yet sarcastic personality, she’s the steady, humorous anchor of the group.</p>
            </div>
        </div>
        <div>
            <div className="content">
            <h2>Matt</h2>
            <span>Bass Guitar, Synth</span>
            <p>Matt is the experimental mind behind the band’s groovy basslines and synth layers. Quiet offstage but dynamic in performances, he brings a unique edge inspired by bands like Muse and RHCP</p>
            </div>
        </div>
        </div>
      
    </div>
  );
};