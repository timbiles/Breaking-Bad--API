import React, { Component } from 'react';
import { StyledLink, MainWrapper, Wrapper } from '../../styles/nav';

export default class Nav extends Component {
  state = {
    nav: ['', 'About', 'Documentation'],
    active: false
  };

  render() {
    const { pathname } = window.location;
    const map = this.state.nav.map((e, i) => (
      <StyledLink
        className={pathname === `/${e}` ? 'location' : null}
        key={i}
        to={`/${e}`}
      >
        {e ? e : 'Home'}
      </StyledLink>
    ));

    return (
      <MainWrapper>
        <Wrapper main>{map}</Wrapper>
      </MainWrapper>
    );
  }
}
