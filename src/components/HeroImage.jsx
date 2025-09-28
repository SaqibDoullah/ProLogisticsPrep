import React from 'react';

const HeroImage = () => {
  return (
    <video
      src="/prologisticsprep-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
    />
  );
};

export default HeroImage;
