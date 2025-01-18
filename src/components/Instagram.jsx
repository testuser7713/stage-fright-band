import React, { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    // This ensures the Instagram embed script is loaded after the component mounts
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        padding: "20px",
        borderRadius: "10px",
        width: "100%", /* Allow the container to fill available space */
        display: "flex", /* Allow the content to be centered */
        justifyContent: "center", /* Center content horizontally */
        alignItems: "center", /* Center content vertically */
      }}
    >      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/stage.frightband/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          backgroundColor: "#1a1a1a",  // Dark background for the embed
          border: "0",
          borderRadius: "10px",
          boxShadow: "0 0 1px 0 rgb(0, 0, 0), 0 1px 10px 0 rgb(0, 0, 0)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      >
        <div style={{ padding: "16px", color: "#fff" }}>
          <a
            href="https://www.instagram.com/stage.frightband/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#333", // Darker background for the link
              lineHeight: "0",
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              color: "#fff", // Light text for the link
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Your content here */}
          </a>
          <p
            style={{
              color: "#c9c8cd", // Light gray text color
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: "0",
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href="https://www.instagram.com/stage.frightband/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: "#c9c8cd", // Light link color
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Stage Fright
            </a>{" "}
            (@
            <a
              href="https://www.instagram.com/stage.frightband/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: "#c9c8cd", // Light link color
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              stage.frightband
            </a>
            ) • Instagram photos and videos
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
