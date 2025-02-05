import React, { useState, useRef } from "react";
import Burnt from "../assets/burnt oblations (1).png"
import Ignition from "../assets/ignition (1).png"
import Fire from "../assets/lost in the fire (1).png"
import Surged from "../assets/surged chaos (1).png"
import Obituary from "../assets/obituary (1).png"
import "./Music.css";
import audio from "../assets/RPReplay_Final1731258274.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunes, faApple, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import album1 from "../assets/albums.png"
import album2 from "../assets/middle_alb.png"
import album3 from "../assets/albums (3).png"
import album4 from "../assets/album4 (1).png"

export default function Music() {
    const [position, setPosition] = useState(3); // Default to the 3rd radio button
    const totalSlides = 5; // Total number of slides

    const moveLeft = () => {
        setPosition((prev) => (prev === 1 ? totalSlides : prev - 1)); // Move to the previous slide or loop to the last
    };

    const moveRight = () => {
        setPosition((prev) => (prev === totalSlides ? 1 : prev + 1)); // Move to the next slide or loop to the first
    };

    const info = [
        {
            name: "BURNT OBLATIONS",
            className: "Burnt",
            p: "music_desc_con_p",
            s: "burnt_s",
            song1: "Puppet Act",
            song2: "Introspection",
            song3: "Past Echoes",
            song4: "Pray to Me",
            song5: "",

            desc: "Tells the story of resilience, loss, and ambition that rose from discarded prayers. Through the album, listeners are taken on a journey about rising from the ashes past dream and finding solace in oneself. This album involves raw, emotive guitar riffs, haunting lyrics, and a fusion of indie-rock introspection with explosive energy"
        },
        {
            name: "IGNITION",
            className:"Ignition",
            p: "music_desc_con_p",
            s: "ignition_s",
            song1: "Ignition",
            song2: "",
            song3: "",
            song4: "",
            song5: "",

            desc: "Talks about the catalyst for Stage Fright’s journey and about what started it all. It gives listeners a fresh and authentic vision of the emotions that went through the band when they first started. Each track captures the ambition, grief, hopelessness, and most importantly, fiery determination of the time through an intricate layering of vibrant guitar riffs, thunderous percussion, and lyrics that strike like a match."
        },
        {
            name:"LOST IN THE FIRE",
            className:"Lost_2",
            p: "lost_desc_con_p",
            s: "lost_s",
            song1: "Heaven",
            song2: "Match Strike",
            song3: "Inferno",
            song4: "Smoke Signals",
            song5: "Flicker and Fade",
            desc: "A song about losing oneself, self sabotage, passion, and rebirth. With a soundscape that oscillates between smoldering ballads and roaring anthems, the album captures the feeling of being consumed by life's flames while desperately seeking a way out—or perhaps a way to embrace the burn."
        },
        {
            name:"SURGED CHAOS",
            className: "Surged",
            p: "music_desc_con_p",
            s: "surged_s",
            song1: "Surged Chaos",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            desc: "This single is a fierce and electrifying journey through the collision of raw energy and distorted reality. The band weaves a chaotic tapestry of heavy riffs, pounding drums, and piercing vocals, capturing the frenetic tension of a world teetering on the edge. With explosive intensity, SURGED CHAOS delves into the turmoil of self-doubt, internal conflict, and the uncontrollable forces that define modern existence."
        },
        {
            name:"OBITUARY",
            className: "Obituary",
            p: "music_desc_con_p",
            s: "obituary_s",
            song1: "Afterglow",
            song2: "Six Feet",
            song3: "Nail in the Coffin",
            song4: "Paradise",
            song5: "",
            desc: "A reflection of the past experiences that made Stage Fright who they are today. Serves to remember the past and praise the reborn present. With a sound that blends melancholic melodies, heavy rock grit, and poetic lyricism, Obituary is as much about mourning as it is about finding meaning in the void."
        }
    ];

    const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state
    const [currentTime, setCurrentTime] = useState(0); // Current audio time
    const [duration, setDuration] = useState(0); // Total duration
  
    const audioRef = useRef(null); // Reference to the audio element
  
    // Toggle Play/Pause
    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    // Update current time as audio plays
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    // Set audio duration when metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };
  
    // Seek to specific time
    const handleSeek = (e) => {
      const seekTime = e.target.value;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    };

    return (
        <div className="music_page">
            <div className="top_sec">
                {/* Left Arrow */}
                

                {/* Radio Buttons */}
                {[1, 2, 3, 4, 5].map((index) => (
                    <input
                        key={index}
                        type="radio"
                        name="position"
                        checked={position === index}
                        onChange={() => setPosition(index)}
                        className="radio"
                    />
                ))}
                    
                
                
                {/* Carousel */}
                <div className="carousel" style={{ "--position": position }}>
                    <button className="arrow left" onClick={moveLeft}>
                        &#8592;
                    </button>
                    <div className="item">
                        <img src={Burnt}></img>
                    </div>
                    <div className="item">
                        <img src={Ignition}></img>
                    </div>
                    <div className="item">
                        <img src={Fire}></img>
                    </div>
                    <div className="item">
                        <img src={Surged}></img>
                    </div>
                    <div className="item">
                        <img src={Obituary}></img>
                    </div>
                    <button className="arrow right" onClick={moveRight}>
                    &#8594;
                    </button>
                    
                </div>
                


                {/* Center Rectangle */}
                

                {/* Right Arrow */}
            <div className="audio_player_con">
                <div className="audio_player">
                {/* Audio element */}
                <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                >
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>

                {/* Play/Pause Button */}
                <button className="player_but_con" onClick={togglePlayPause}>
                    <FontAwesomeIcon className="player_but" icon={isPlaying ? faPause: faPlay} />
                </button>

                {/* Progress Bar */}
                <input
                type="range"
                className="custom-progress"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                style={{ width: "300px", margin: "0 10px" }}
                />

                {/* Time Display */}
                <div>
                {Math.floor(currentTime)} / {Math.floor(duration)} seconds
                </div>
            </div>
            
        </div>
            
                
            </div>

            <div className="music_bottom">
                <div className="music_desc_con">
                    <div className={info[position-1].className}>
                        <h3 className={info[position-1].className}>{info[position-1].name}</h3>
                        <p className={info[position-1].p}>{info[position-1].desc}</p>
                        <div className={info[position-1].s}>
                            <p>{info[position-1].song1}</p>
                            <p>{info[position-1].song2}</p>
                            <p>{info[position-1].song3}</p>
                            <p>{info[position-1].song4}</p>
                            <p>{info[position-1].song5}</p>
                        </div>
                    </div>
                    

                </div>
                
            </div>
            <div>
                                {/*<div className="music_merch_right_con">
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
                
                                </div>*/}
                <div className="poll_con">
                <div className="poll">
                <iframe
                src="https://strawpoll.com/embed/XOgOVdDPon3"
                style={{ width: '100%', height: '500px', border: 'none' }}
                title="Poll"
                ></iframe>
                </div>
            </div>

            </div>
            <div className="streaming">
                <div className="stream_con">
                    <div className="stream_text_con">
                        <h2 className="stream_text">STREAM NOW</h2>
                    </div>
                    <div className="stream_icons_con">
                    <div className="stream_icons">
                        
                        <div className="stream_row">
                            <FontAwesomeIcon className="icon" icon={faSpotify} />
                            <p>Spotify</p>
                        </div>
                        <div className="stream_row">
                            <FontAwesomeIcon className="icon" icon={faItunes} />
                            <p>iTunes</p>
                        </div>
                        <div className="stream_row">
                            <FontAwesomeIcon className="icon" icon={faApple} />
                            <p>Apple Music</p>
                        </div>
                        <div className="stream_row">
                            <FontAwesomeIcon className="icon" icon={faSoundcloud} />
                            <p>SoundCloud</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                    
            </div>


        </div>
    );
}