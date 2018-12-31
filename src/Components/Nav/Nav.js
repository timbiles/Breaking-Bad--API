import React, { Component } from 'react';
import axios from 'axios';
import { StyledLink, MainWrapper, Wrapper, Input, Btn } from '../../styles/nav';

export default class Nav extends Component {
  state = {
    nav: ['Home', 'About', 'Documentation'],
    data: [],
    search: 'ice trays'
  };

  componentDidMount() {
    axios('/api/complete').then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const { data, search } = this.state;
    console.log('data', this.state.data);

    let results = [];

    for (var i = 0; i < data.length; i++) {
      for (let key in data[i]) {
        if (typeof data[i][key] === 'string' && search !== '') {
          if (data[i][key].indexOf(search) != -1) {
            results.push(data[i]);
          }
        }
      }
    }
    console.log(results);

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
        <Wrapper secondary>
          <Input
            type="text"
            placeholder="Search Breaking Bad API"
            onChange={e => this.setState({ search: e.target.value })}
            name=""
            id=""
            width="300px"
          />
          <Btn>Press</Btn>
        </Wrapper>
      </MainWrapper>
    );
  }
}
