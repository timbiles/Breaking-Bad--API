import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'

import routes from './routes';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      {routes}
      <Footer />
    </div>
  </Router>
);

export default hot(App);
