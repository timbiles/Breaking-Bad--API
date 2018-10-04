import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About'
import Docs from './Components/Docs/Docs'

export default (
  <Switch> 
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />    
    <Route exact path="/documentation" component={Docs} />        
    <Route path='*' render={()=> <h1>404</h1>}/>
  </Switch>
);