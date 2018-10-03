import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css'

class Home extends Component {
  state = {
    characters: []
  };
  componentDidMount() {
    this.getChar();
  }

  getChar() {
    axios.get('/api/characters').then(res => {
      console.log(res.data);
      this.setState({ characters: res.data });
    });
  }
  render() {
    const { characters } = this.state;
    const charMap = characters.map(e => {
      return (
        <div key={e.id}>
          <Characters person={e} />
        </div>
      );
    });
    return (
      <div className="home">
        <div className="header">
          <div className="link_holder">
            <p>Home</p>
            <p>About</p>
            <p>Documentation</p>
          </div>
          <h1>Breaking Bad API</h1>
        </div>
        <div className='character_map'>{charMap}</div>
      </div>
    );
  }
}

export default Home;
