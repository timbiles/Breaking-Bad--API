import React, { Component } from 'react';
import axios from 'axios';
import Playground from '../Components/Playground';

import { Container, Text, Highlight } from '../styles/homeStyle';

import Characters from '../Components/Characters/Characters';
import '../Components/Home/Home.scss';

class Home extends Component {
  state = {
    characters: [],
    input: '',
    rd: {},
    toggle: false,
    id: ''
  };

  componentDidMount() {
    this.getAll();
    this.getRandom();
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

  randomDeath() {
    axios.get('/api/random-death').then(res => {
      this.setState({ rd: res.data });
    });
  }

  navigation = (e) => {
    const {id} = e.target
    if(id.includes('burg')) {
      this.setState({id: +id.replace(/\D/g,''), toggle: !this.state.toggle})
    } else { 
      this.setState({toggle: false})
    }
  }

  handlePress = (e) => e.key === 'Enter' && this.setState({ id: e.target.id}, () => {
    this.setState({toggle: !this.state.toggle})
  })

  render() {
    const { characters, rd, id } = this.state;
    const charMap = characters.map(e => {
      return <Characters toggle={id === e.char_id && this.state.toggle} key={e.char_id} person={e} handlePress={this.handlePress}/>;
    });

    const death = (
      <div className="death_info" key={rd.death_id}>
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
    );

    return (
      <div onClick={this.navigation}>
        <Container>
          <Text primary>
            The Breaking Bad A<Highlight>P</Highlight>I            
          </Text>
          <Text secondary>...Tread Lightly</Text>
        </Container>
        <Playground />

        <div className="character_map">{charMap}</div>
        <div className="test_api">
          <div className="death_map">
            <div>
              <h3>Click here to find out about a random death!</h3>
              <button onClick={() => this.randomDeath()}>Death!</button>
            </div>
            {rd.death && death}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
