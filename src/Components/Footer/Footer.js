import React, { Component } from 'react';
import axios from 'axios';

import './Footer.css'

class Footer extends Component {
    state = {
        totalChar: [],
        episodes: [],
        quotes: [],
        deaths: []
    }
    componentDidMount(){
        this.getChar();
        this.getEpisodes();
        this.getQuotes();
        this.getDeaths();
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


  getDeaths() {
    axios.get('/api/death-count').then(res=> {
      this.setState({deaths: res.data})
    })
  }

    render() {
        const {totalChar, episodes, quotes, deaths} = this.state
        return (
            <div className='footer'>
                <div className="sub_info">
            <p>Characters: {totalChar.length}</p>
            <p>Episodes: {episodes.length}</p>
            <p>Quotes: {quotes.length}</p>
            <p>Death Count: {deaths.deathCount}</p>
          </div>
            </div>
        );
    }
}

export default Footer;