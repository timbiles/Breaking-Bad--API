import React from 'react';

import './Hamburger.css'

const Hamburger = props => {
  return (
    <div className="hamburger_icon" onClick={props.handleClick}>
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>
  );
};

export default Hamburger;
