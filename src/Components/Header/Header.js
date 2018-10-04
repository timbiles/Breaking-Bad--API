import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="link_holder">
        <Link className="head_link" to="/">
          Home
        </Link>
        <Link className="head_link" to="/about">
          About
        </Link>
        <Link className="head_link" to="/documentation">
          Documentation
        </Link>
      </div>
      <h1>Breaking Bad API</h1>
    </div>
  );
};

export default Header;
