import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {routes}
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
