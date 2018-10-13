import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routey from './routes';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  state = {
    something: 'thoias'
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routey test={this.state.something}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
