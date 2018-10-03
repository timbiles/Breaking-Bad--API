import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">{routes}</div>
      </Router>
    );
  }
}

export default App;
