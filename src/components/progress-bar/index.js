import React from 'react';
import './progress-bar.css';

const ProgressBar = ({ value, text }) => (
  <div className="progress-bar">
    <div className="progress-bar__line">
      <div
        className="progress-bar__fill"
        style={{
          width: `${value}%`
        }}
      />
    </div>

    <div className="progress-bar__text">{text}</div>
  </div>
);

export default ProgressBar;
