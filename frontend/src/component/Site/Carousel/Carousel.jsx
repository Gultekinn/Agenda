import React from 'react';
import YouTube from 'react-youtube';
import '../Carousel/Carousel.scss';

const Carousel = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
      modestbranding: 1,
      showinfo: 0,
      fs: 0,
      playsinline: 1,
      rel: 0,
    },
  };

  return (
    <div className="carousel-container">
    <div className="content">
      <h1>Get Our Latest Offers News</h1>
      <p>Subscribe to our newsletter</p>
      <div class="subscribe-form">
        <input type="email" id="email" placeholder="Your Email" />
        <button type="submit" id="subscribe-button">Subscribe</button>
      </div>
    </div>
    <div className="video-background">
      <YouTube videoId="ExztAk_GOrU" opts={videoOptions} className="video-iframe" />
    </div>
  </div>
  
  );
}

export default Carousel;
