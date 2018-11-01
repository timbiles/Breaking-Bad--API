import React from 'react';
import {StyledLink, MainWrapper, Wrapper} from '../../styles/nav';

import './Nav.css';

const nav = ['Home', 'About', 'Documentation'];

const map = nav.map((e, i) => {
  return (
    <StyledLink key={i} to={e === 'Home' ? '/' : `/${e}`}>
      {e}
    </StyledLink>
  );
});

const Nav = () => {
  return (
    <MainWrapper>
      <Wrapper>{map}</Wrapper>
    </MainWrapper>
  );
};

export default Nav;
