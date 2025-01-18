import React, { useEffect, useState } from "react";
import "./Spotify.css"; // Import CSS file for styling
import stage_fright from "../assets/stage_fright.jpg"

const SpotifyPlaylist = ({ playlistId }) => {
    const [token, setToken] = useState(null);
    const [playlist, setPlaylist] = useState(null);
  
    // Spotify API credentials
    const clientId = "4461f0f686474c4f93a2b0c2479639d5";
    const clientSecret = "343808fe058848c09a5e1de4f139f3dc";
  
    // Function to get access token
    const getAccessToken = async () => {
      const url = "https://accounts.spotify.com/api/token";
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      };
      const body = new URLSearchParams({ grant_type: "client_credentials" });
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: headers,
          body: body.toString(),
        });
        const data = await response.json();
        setToken(data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };
  
    // Function to fetch playlist data
    const fetchPlaylist = async (accessToken) => {
      const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };
  
    useEffect(() => {
      // Fetch the access token when the component mounts
      if (!token) {
        getAccessToken();
      } else {
        // Fetch the playlist data once the token is available
        fetchPlaylist(token);
      }
    }, [token]); // Re-run when token changes
  
    return (
      <div className="spotify-playlist-container">
        {playlist ? (
          <div>
            <div className="spotify_main_con">
              <img className="spotify_img" src={stage_fright}></img>
              <div className="playlist-title-con">
              <h2 className="playlist-title">
                <a
                  href={playlist.external_urls.spotify} // Link to the Spotify playlist
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  {playlist.name}
                </a>
              </h2>
              <h2 className="playlist-title">Top Picks</h2>
              </div>
            </div>
            <p className="playlist-description">{playlist.description}</p>
            <ul className="track-list">
              {playlist.tracks.items.map((item, index) => (
                <li key={index} className="track-item">
                  <div className="track-info">
                    <span className="track-name">{item.track.name}</span>
                    <br></br>
                    <span className="track-artists">
                      {item.track.artists.map((artist) => artist.name).join(", ")}
                    </span>
                  </div>
                  <a
                    href={item.track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="play-button"
                  >
                    ▶ Play
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading playlist...</p>
        )}
      </div>
    );
  };
  
  export default SpotifyPlaylist;