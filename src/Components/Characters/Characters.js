import React, { Component } from 'react';

import Burger from '../Hamburger/Hamburger';
import './Characters.css';

class Characters extends Component {
  state = {
    toggle: false
  };

  handleClick = () => {
    this.setState({toggle: !this.state.toggle} )
  };

  render() {
    const { toggle } = this.state;
    const { person } = this.props;
    const map = person.occupation.split(',').map((e, i) => {
      return <p className='occupation_map' key={i}>{e}</p>;
    });

    console.log(map)

    return (
      <div className="character">
        <Burger handleClick={e => this.handleClick()} />
        <img src={person.img} alt={person.name} />
        <div className={toggle ? 'char_btm btm2' : "char_btm"}>
          <h4>{person.name}</h4>
          <div>
            <img
              className="bee_logo"
              src="https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg"
              alt=""
            />
            <p> {person.nickname}</p>
          </div>
          {toggle && map }
        </div>
      </div>
    );
  }
}

export default Characters;

// random
// const occupation = person.occupation.split(',').map((e,i)=> {
//   return <div key={i}>
//     {e}
//   </div>
// })
