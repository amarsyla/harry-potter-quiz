import React from 'react';
import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <span>Harry Potter Quiz</span>

      <span
        role="img"
        aria-label="wizard icon"
        className="header__title__icon"
      >
        🧙
      </span>
    </h1>
  </header>
);

export default Header;
