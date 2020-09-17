import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/loading-animation.json';
import './loader.css';

const Loader = () => (
  <div className="loader">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData
      }}
      height={400}
      isClickToPauseDisabled
    />
  </div>
);

export default Loader;
