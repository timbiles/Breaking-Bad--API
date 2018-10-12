import React, { Component } from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: [],
    totalChar: [],
    episodes: [],
    quotes: [],
    input: '',
    searchResults: []
  };

  componentDidMount() {
    this.getChar();
    this.getEpisodes();
    this.getQuotes();
    this.getAll();
    this.getRandom();
    this.getDeaths();
  }

  getDeaths(){
    axios.get('/api/deaths').then(res=> {
      console.log(res.data)
    })
  }


  getAll() {
    axios.get('/api/').then(res => {
      console.log('url info >>>', res.data);
    });
  }

  getRandom(){
    axios.get('/api/character/random?limit=12').then(res=> {
      this.setState({characters: res.data})
    })
  }

  getChar() {
    axios.get('/api/characters/').then(res => {
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
   axios.get(`/api/${this.state.input}`).then(res=> {
     this.setState({searchResults: res.data})
   })
 }

  render() {
    const { characters, totalChar, episodes, quotes, input, searchResults } = this.state;
    const charMap = characters.map(e => {
      return <Characters key={e.id} person={e} />;
    });

    const searchMap = searchResults.map(e=> {
      return <div className='search_res'key={e.id}>
            <p>{e.name || e.title || e.quote}</p>
      </div>
    })

    return (
      <div className="home">
        <div className="home_title">
          <h1>
            The Breaking Bad A<mark>P</mark>I
          </h1>
        </div>

        <div className="character_map">{charMap}</div>
        <div className='test_api'>
          <h3>Try it out</h3>
          <div>
            <p>/api/</p>
            <input type="text" placeholder='characters/1' onChange={e=> this.setState({input: e.target.value})}/>
            <button onClick={()=> this.findTest()}>Try it!</button>
          </div>
          <div className='test_box'>
            {searchMap}
          </div>
        </div>

        <div className="home_btm">
          <div className="sub_info">
            <p>Characters: {totalChar.length}</p>
            <p>Episodes: {episodes.length}</p>
            <p>Quotes: {quotes.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
