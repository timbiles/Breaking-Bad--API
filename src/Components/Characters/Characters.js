import React, { Component } from 'react';
import styled from 'styled-components';
import { Character } from '../../styles/characters';
import Burger from '../Hamburger/Hamburger';
import './Characters.scss';

const CharacterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

class Characters extends Component {
  render() {
    const { person, toggle, homeDisplay } = this.props;

    const occ = person.occupation.join(',');
    const app = person.appearance.join(',');
    const betterCallSaulapp = person.better_call_saul_appearance.join(',');

    return (
      <Character id={`character-${person.char_id}`}>
        <Burger id={person.char_id} handlePress={this.props.handlePress} />
        <img className="char_img" src={person.img} alt={person.name} />
        <div
          className={toggle ? 'char_btm btm2' : 'char_btm'}
          id={`character-info-${person.char_id}`}
        >
          <CharacterTitle>{person.name}</CharacterTitle>
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
              {homeDisplay === 'Breaking Bad' && (
                <div>
                  <p>Breaking Bad Seasons</p>
                  {app}
                </div>
              )}
              {homeDisplay === 'Better Call Saul' && (
                <div>
                  <p>Better Call Saul Seasons</p>
                  {betterCallSaulapp}
                </div>
              )}
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
