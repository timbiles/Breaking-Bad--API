import React from 'react';

import { BurgerWrapper, Burger} from '../../styles/burger';

const Hamburger = props => {
  return (
    <BurgerWrapper id={`${props.id}burg`} tabIndex='0' onKeyDown={props.handlePress}>
      <Burger id={`${props.id}burga`} width="30px" />
      <Burger id={`${props.id}burgb`} width="40px" />
      <Burger id={`${props.id}burgc`} width="22px" />

    </BurgerWrapper>
  );
};

export default Hamburger;
