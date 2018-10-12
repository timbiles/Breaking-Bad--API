import React, { Component } from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: [],
    totalChar: [],
    episodes: [],
    deaths: [],
    quotes: [],
    input: '',
    searchResults: [],
    rd: {}
  };

  componentDidMount() {
    this.getChar();
    this.getEpisodes();
    this.getQuotes();
    this.getAll();
    this.getRandom();
    this.getDeathCount();
    this.getDeaths();
  }

  getDeathCount() {
    axios.get('/api/death-count?name=Gustavo+Fring').then(res => {
      console.log('Random Death count >>>', res.data);
    });
  }

  getDeaths() {
    axios.get('/api/death-count').then(res=> {
      this.setState({deaths: res.data})
    })
  }

  getAll() {
    axios.get('/api/').then(res => {
      console.log('url info >>>', res.data);
    });
  }

  getRandom() {
    axios.get('/api/character/random?limit=12').then(res => {
      this.setState({ characters: res.data });
    });
  }

  getChar() {
    axios.get('/api/characters').then(res => {
      console.log('All characters >>>', res.data);
      this.setState({ totalChar: res.data });
    });
  }

  getEpisodes() {
    axios.get('/api/episodes').then(res => {
      console.log('All Episodes >>>', res.data);
      this.setState({ episodes: res.data });
    });
  }

  getQuotes() {
    axios.get('/api/quotes').then(res => {
      console.log('All Quotes >>>', res.data);
      this.setState({ quotes: res.data });
    });
  }

  findTest() {
    axios.get(`/api/${this.state.input}`).then(res => {
      this.setState({ searchResults: res.data });
    });
  }

  randomDeath() {
    axios.get('/api/random-death').then(res => {   
      this.setState({ rd: res.data });
      console.log(res.data)
    });
  }

  clickDeath = () => {
    this.randomDeath();
  };

  render() {
    const {
      characters,
      totalChar,
      episodes,
      deaths,
      quotes,
      // input,
      // searchResults,
      rd
    } = this.state;
    const charMap = characters.map(e => {
      return <Characters key={e.char_id} person={e} />;
    });

    // const searchMap = searchResults.map(e => {
    //   return (
    //     <div className="search_res" key={e.id}>
    //       <p>{e.name || e.title || e.quote}</p>
    //     </div>
    //   );
    // });

     
      
    const death = <div className="death_info" key={rd.death_id}>
          <div>
            <h2>{rd.death}</h2>
            <img src={rd.img} alt={rd.death} />
          </div>
          <div>
            <h4>Cause of death:</h4>
            <p>{rd.cause}</p>
            <h4>Responsible:</h4>
            <p>{rd.responsible}</p>
            <h4>Last words:</h4>
            <p>"{rd.last_words}"</p>
          </div>
        </div>
      
    

    return (
      <div className="home">
        <div className="home_title">
          <h1>
            The Breaking Bad A<mark>P</mark>I
          </h1>
        </div>

        <div className="character_map">{charMap}</div>
        <div className="test_api">
          {/* Trying out some entering in endpoints ... */}
          {/* <div>
            <p>/api/</p>
            <input type="text" placeholder='characters/1' onChange={e=> this.setState({input: e.target.value})}/>
            <button onClick={()=> this.findTest()}>Try it!</button>
          </div>
          <div className='test_box'>
            {searchMap}
          </div> */}
          <div className="death_map">
          <div>
            <h3>Click here to find out about a random death!</h3>
            <button onClick={() => this.clickDeath()}>Death!</button>
          </div>
            {rd.death && death}
          </div>
        </div>

        <footer className="home_btm">
          <div className="sub_info">
            <p>Characters: {totalChar.length}</p>
            <p>Episodes: {episodes.length}</p>
            <p>Quotes: {quotes.length}</p>
            <p>Death Count: {deaths.deathCount}</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
