import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About'
import Docs from './Components/Docs/Docs'


const Router = props => {
  // console.log(props.test)
  return (

  <Switch> 
    <Route exact path="/" render={() => {
      return <Home something={props.test}/>
    }}/>
    <Route path="/about" component={About} />    
    <Route path="/documentation" component={Docs} />                
    <Route path='*' render={()=> <h1>404</h1>}/>
  </Switch>
  )
}

export default Router;