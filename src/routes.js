import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About'
import Docs from './pages/Docs'


export default (
  <Switch> 
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />    
    <Route path="/documentation" component={Docs} />                
    <Route path='*' render={()=> <h1>404</h1>}/>
  </Switch>
);