import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: []
  };
  componentDidMount() {
    this.getChar();
    this.getEpisodes();
  }

  getChar() {
    axios.get('/api/characters').then(res => {
      console.log('characters >>>', res.data);
      this.setState({ characters: res.data });
    });
  }

getEpisodes(){
  axios.get('/api/episodes').then(res=> {
    console.log('episodes', res.data)
  })
}

  render() {
    const { characters } = this.state;
    const charMap = characters.map(e => {
      return <Characters key={e.id} person={e} />;
    });


    return (
      <div className="home">
        <div className="character_map">{charMap}</div>
      </div>
    );
  }
}

export default Home;
