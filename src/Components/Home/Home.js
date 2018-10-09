import React, { Component } from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: [],
    episodes: [],
    quotes: []
  };

  componentDidMount() {
    this.getChar();
    this.getEpisodes();
    this.getQuotes();
    this.getRandom();
    this.getTest()
  }

  getTest(){
    axios.get('/api/').then(res=> {
      console.log('url info >>>', res.data)
    })
  }


  getRandom(){
    axios.get('/api/character/random').then(res=> {
      console.log('Random char>>>',res.data)
    })
  }

  getChar() {
    axios.get(`/api/characters/`).then(res => {
      console.log('characters >>>', res.data);
      this.setState({ characters: res.data });
    });
  }

  getEpisodes() {
    axios.get('/api/episodes').then(res => {
      console.log('episodes >>>', res.data);
      this.setState({ episodes: res.data });
    });
  }

  getQuotes() {
    axios.get('/api/quotes').then(res => {
      console.log('quotes >>>', res.data);
      this.setState({ quotes: res.data });
    });
  }

  render() {
    const { characters, episodes, quotes } = this.state;
    const charMap = characters.map(e => {
      return <Characters key={e.id} person={e} />;
    });

    return (
      <div className="home">
      <div className='home_title'>

      <h1>The Breaking Bad A<mark>P</mark>I</h1>
      </div>
      
        <div className="character_map">{charMap}</div>
        <div className='home_btm'>

        <div className="sub_info">
          <p>Characters: {characters.length}</p>
          <p>Episodes: {episodes.length}</p>
          <p>Quotes: {quotes.length}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
