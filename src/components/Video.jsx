import React from 'react'
import videoSource from '../assets/Frite-Cola-Electrique clip.mp4';
function Video() {
  return (
    <div className="video-frame-container">
    
      <div className="video-wrapper">
        <video
          autoPlay
          muted
          loop
           playsInline
          style={{  objectFit: 'cover' }}
        >
          <source src={videoSource} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
      </div>
  )
}

export default Video