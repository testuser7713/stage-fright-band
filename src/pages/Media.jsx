import React from "react";
import SpotifyPlaylist from "../components/Spotify.jsx";
import Instagram from "../components/Instagram.jsx";
import  "./Media.css"
import Gallery from "../components/Gallery.jsx"

const Media = () => {
  const playlistId = "4mcof1lO2zFOKQIByfUvSL"; // Example playlist ID

  return (
    <div className="media_page">
      <div>
        <div className="media_top">
          <h1 className="connect_text">Connect</h1>
          <h3 className="with_text">with Stage Fright</h3>
        </div>
        <div className="social_con">

        
        <div className="spotify_main_conn">
        <div className="spotify_con">
          <div className="spotify_sub_con">
            <h1 className="spotify_name">LISTEN WITH US</h1>
          </div>
          <SpotifyPlaylist playlistId={playlistId} />

        </div>

        </div>


        <div className="insta_con">
          <div className="insta_top">
            <h1 className="spotify_name">LATEST CONTENT</h1>
          </div>
          <div className="insta_sub_con">
            
            <div className="embedd_con">
              <div className="embed_sub_con">
                <Instagram />

              </div>
            </div>
            

          </div>
        </div>
        </div>
          <div className="insta_top">
            <h1 className="spotify_name">BEHIND THE STAGE</h1>
          </div>
        <div className="gallery">
              <Gallery />

        </div>

      </div>
      <div>

        
      </div>
    </div>
  );
};

export default Media;
