import React from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <iframe
          className="video-frame"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="video-title">{title}</h3>
      <p className="video-description">
        Watch this lesson to learn the key concepts. You can pause, rewind, and rewatch as many times as needed.
      </p>
    </div>
  );
};

export default VideoPlayer;
