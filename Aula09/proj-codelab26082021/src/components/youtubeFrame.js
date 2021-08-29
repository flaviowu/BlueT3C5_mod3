import React from "react";

export default function iFrameYouTube(props) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.youtubeId}`}
      title="YouTube video player"
    ></iframe>
  );
}
