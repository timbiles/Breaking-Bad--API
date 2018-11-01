import React from 'react';

import { BurgerWrapper, Burger } from '../../styles/burger';

const Hamburger = props => {
  return (
    <BurgerWrapper onClick={props.handleClick}>
      <Burger width="30px" />
      <Burger width="40px" />
      <Burger width="22px" />
    </BurgerWrapper>
  );
};

export default Hamburger;
