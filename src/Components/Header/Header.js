import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => {
    return (
        <div className="header">
          <div className="link_holder">
          <Link className='head_link' to='/'>Home
          </Link>
            <p>About</p>
            <p>Documentation</p>
          </div>
          <h1>Breaking Bad API</h1>
        </div>
    );
};

export default Header;