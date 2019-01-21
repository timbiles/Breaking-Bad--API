import React, { Component } from 'react';
import axios from 'axios';
import { StyledLink, MainWrapper, Wrapper } from '../../styles/nav';

export default class Nav extends Component {
  state = {
    nav: ['Home', 'About', 'Documentation']
  };

  render() {

    const map = this.state.nav.map((e, i) => {
      return (
        <StyledLink key={i} to={e === 'Home' ? '/' : `/${e}`}>
          {e}
        </StyledLink>
      );
    });

    return (
      <MainWrapper className="header">
        <Wrapper main>{map}</Wrapper>
      </MainWrapper>
    );
  }
}
