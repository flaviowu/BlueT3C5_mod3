import React from "react";
import "./Style/youtubeFrame.css";

export default function iFrameYouTube(props) {
  return (
    <iframe
      width="230"
      src={`https://www.youtube.com/embed/${props.youtubeId}`}
      title="YouTube video player"
    ></iframe>
  );
}
