import React, { Component } from 'react';
import axios from 'axios';
import { StyledLink, MainWrapper, Wrapper, Input, Btn } from '../../styles/nav';
import Toaster from '../Toaster/index';

export default class Nav extends Component {
  state = {
    nav: ['Home', 'About', 'Documentation'],
    data: [],
    search: '',
    width: '300px',
    color: '#4b4b4b',
    searchResults: []
  };

  componentDidMount() {
    axios('/api/complete').then(res => {
      this.setState({ data: res.data });
    });
  }

  showSearch = (res) => {
    res.length === 0 
      ? console.log('There are no results, double check your spelling!')
      : this.setState({searchResults: res}, () => console.log(res))
  }

  render() {
    const { data, search, width, color, searchResults } = this.state;
    // console.log('data', this.state.data);

    let results = [];

    for (var i = 0; i < data.length; i++) {
      for (let key in data[i]) {
        if (typeof data[i][key] === 'string' && search !== '') {
          if (data[i][key].toLowerCase().indexOf(search.toLowerCase()) != -1) {
            results.push(data[i]);
          }
        } 
      }
    }

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
            placeholder={width === '300px' ? 'Search 🔍' : "Search the Breaking Bad API..."}
            onChange={e => this.setState({ search: e.target.value })}
            onFocus={()=> this.setState({width: '600px', color: '#487f5a'})}
            onBlur={()=> this.setState({width: '300px', color: '#4b4b4b'})}            
            name=""
            id=""
            width={width}
            color={color}
          />
          <Btn
            onClick={()=> this.showSearch(results)}
          >Search</Btn>
        </Wrapper>
        <Toaster
          search={searchResults}
        />
      </MainWrapper>
    );
  }
}
