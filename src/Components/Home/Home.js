import React, { Component } from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: [],
    episodes: [],
    quotes: [],
    char: true,
    ep: false
  };

  componentDidMount() {
    this.getChar();
    this.getEpisodes();
    this.getQuotes();
    this.getRandom();
    this.getTest();
  }

  getTest() {
    axios.get('/api/').then(res => {
      console.log('url info >>>', res.data);
    });
  }

  getRandom() {
    axios.get('/api/character/random').then(res => {
      console.log('Random char>>>', res.data);
    });
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

  toggleMap = (a, b) => {
    this.setState({ char: a, ep: b });
  };

  render() {
    const { characters, episodes, quotes, char, ep } = this.state;
    const charMap = characters.map(e => {
      return <Characters key={e.id} person={e} />;
    });
    const epMap = episodes.map(e => {
      return <div key={e.id}>{e.title}</div>;
    });

    const qMap = quotes.map(e => {
      return (
        <div key={e.id}>
          <h3>{e.quote}</h3>
          <p>-{e.author}</p>
        </div>
      );
    });

    return (
      <div className="home">
        <div className="home_title">
          <h1>
            The Breaking Bad A<mark>P</mark>I
          </h1>
          <div className="toggle_api">
            <p onClick={() => this.toggleMap(true, false)}>Characters</p>
            <p onClick={() => this.toggleMap(false, true)}>Episodes</p>
            <p onClick={() => this.toggleMap(false, false)}>Quotes</p>
          </div>
        </div>

        {char && <div className="character_map">{charMap}</div>}
        {ep && <div className="episode_map">{epMap}</div>}
        {!char && !ep && <div className="quote_map">{qMap}</div>}

        <div className="home_btm">
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
