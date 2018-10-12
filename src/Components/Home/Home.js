import React, { Component } from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';
import './Home.css';

class Home extends Component {
  state = {
    characters: [],
    input: '',
    searchResults: [],
    rd: {}
  };

  componentDidMount() {
    this.getAll();
    this.getRandom();
    this.getDeathCount();
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

  getDeathCount() {
    axios.get('/api/death-count?name=Gustavo+Fring').then(res => {
      console.log('Random Death count >>>', res.data);
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
    });
  }

  clickDeath = () => {
    this.randomDeath();
  };

  render() {
    const {
      characters,
      rd,
      // input,
      // searchResults,
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
          <p>...Tread Lightly</p>
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
      </div>
    );
  }
}

export default Home;
