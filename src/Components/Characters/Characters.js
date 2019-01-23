import React, { Component } from 'react';

import {Character} from '../../styles/characters';
import Burger from '../Hamburger/Hamburger';
import './Characters.scss';

class Characters extends Component {
  render() {
    const { person, toggle } = this.props;

    const occ = person.occupation.join(',');
    const app = person.appearance.join(',');

    return (
      <Character>
        <Burger id={person.char_id} handlePress={this.props.handlePress}/>
        <img className='char_img' src={person.img} alt={person.name} />
        <div className={toggle ? 'char_btm btm2' : 'char_btm'}>
          <h4 className='char_name'>{person.name}</h4>
          <div className={toggle ? 'underline' : undefined}>
            <img
              className="bee_logo"
              src="https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg"
              alt=""
            />
            <p> {person.nickname}</p>
          </div>
          {toggle && (
            <div className="hidden_info">
              <div>
                <p>Id</p>
                <p>{person.char_id}</p>
              </div>
              <div>
                <p>Occupation</p>
                <p className="occ_map">{occ}</p>
              </div>
              <div>
                <p>Seasons</p>
                {app}
              </div>
              <div>
                <p>Status</p>
                <p>{person.status}</p>
              </div>
            </div>
          )}
        </div>
      </Character>
    );
  }
}

export default Characters;