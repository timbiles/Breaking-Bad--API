import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: [],
    pup: []
  };
  componentDidMount() {
    this.getChar();
    this.getPups();
  }

  getChar() {
    axios.get('/api/characters').then(res => {
      console.log('characters >>>', res.data);
      this.setState({ characters: res.data });
    });
  }

  getPups() {
    axios.get('/api/puppers').then(res => {
      console.log('puppies >>>', res.data);
      this.setState({ pup: res.data });
    });
  }

  render() {
    const { characters, pups } = this.state;
    const charMap = characters.map(e => {
      return <Characters key={e.id} person={e} />;
    });

    const pupMap = this.state.pup.map((e, i) => {
      return (
        <div key={i} className="puppy">
          <img src={e} alt="" />
        </div>
      );
    });

    return (
      <div className="home">
        <div className="character_map">{charMap}</div>
        <div className="puppy_map">{pupMap}</div>
      </div>
    );
  }
}

export default Home;
