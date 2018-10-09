import React, { Component } from 'react';

import './Docs.css';

class Docs extends Component {
  scrollClick = e => {
    document
      .getElementById(e)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  render() {
    var example = (
      <div className="multi_line ml_1">
        <p>{'{'}</p>
        <p>{'"id": 1,'}</p>
        <p>{'"name": "Walter White",'}</p>
        <p>{'"birthday": "09-07-1958",'}</p>
        <p>{'"occupation": ['}</p>
        <p>{'"High School Chemistry Teacher",'}</p>
        <p>{'"Meth King Pin",'}</p>
        <p>],</p>
        <p>
          {
            '"img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",'
          }
        </p>
        <p>{'"status": "Deceased",'}</p>
        <p>{'"nickname": "Heisenberg"'}</p>
        <p>{'}'}</p>
      </div>
    );

    var example2 = (
      <div className="multi_line ml_2">
        <p>{'{'}</p>
        <p>{'"id": 60,'}</p>
        <p>{'"title": "Ozymandias",'}</p>
        <p>{'"Season": "5",'}</p>
        <p>{'"episode": "14"'}</p>
        <p>{'"air_date": "09-15-2013",'}</p>
        <p>{'"characters": "null",'}</p>
        <p>{'}'}</p>
      </div>
    );

    var example3 = (
      <div className="multi_line ml_3">
        <p>[</p>
        <p>{'{'}</p>
        <p>{'"id": 9,'}</p>
        <p>{'"quote": "Funyuns are awesome.",'}</p>
        <p>{'"author": "Jesse Pinkman"'}</p>
        <p>{'},'}</p>
        <p>{'{'}</p>
        <p>{'"id": 10,'}</p>
        <p>{'"quote": "Ooooooh, Wire.",'}</p>
        <p>{'"author": "Jesse Pinkman"'}</p>
        <p>{'},'}</p>
        <p>. . .</p>
      </div>
    );

    return (
      <div className="documentation">
        <nav className="navbar">
          <h2 onClick={() => this.scrollClick('char')}>Characters</h2>
          <p onClick={() => this.scrollClick('char_at')}>
            Character attributes
          </p>
          <p onClick={() => this.scrollClick('char_all')}>Get all characters</p>
          <p onClick={() => this.scrollClick('char_id')}>Get a specific character by id</p>
          <p onClick={() => this.scrollClick('char_rand')}>Get a random character</p>
          <p onClick={() => this.scrollClick('char_pag')}>Get paginated character</p>
          <p onClick={() => this.scrollClick('char_name')}>Get a specific character by name</p>
          <h2 onClick={() => this.scrollClick('ep')}>Episodes</h2>
          <p onClick={() => this.scrollClick('ep_at')}>Episode attributes</p>
          <p onClick={() => this.scrollClick('ep_all')}>Get all episodes</p>
          <p onClick={() => this.scrollClick('ep_id')}>Get episode by id</p>          
          <h2 onClick={() => this.scrollClick('q')}>Quotes</h2>
          <p onClick={() => this.scrollClick('q_at')}>Quote attributes</p>
          <p onClick={() => this.scrollClick('q_all')}>Get all quotes</p>
          <p onClick={() => this.scrollClick('q_rand')}>Get random quotes</p>
          <p onClick={() => this.scrollClick('q_id')}>Get quote by name</p>          
        </nav>
        <div className="docs_main">
          <h2>Documentation</h2>
          <p>
            Welcome to the Breaking Bad API! This documentation should supply
            with you all the information you need to start making your HTTP
            requests. Give our documentation a read before you get started on your project, and
            don't forget about the ice trays!
          </p>
          <div>
            <h4>Base Url</h4>
            <p className="example">/api/</p>
          </div>
          <div>
            <h3 id="char">Characters Endpoint</h3>
            <h4 id="char_at">Character Attributes</h4>
            <div className="schema">
              <div>
                <p>Attribute</p>
                <p>Type</p>
                <p>Description</p>
              </div>
              <div>
                <p>id</p>
                <p>integer</p>
                <p>Unique Id per character</p>
              </div>
              <div>
                <p>name</p>
                <p>string</p>
                <p>A character's full name.</p>
              </div>
              <div>
                <p>birthday</p>
                <p>string</p>
                <p>A character's birthday.</p>
              </div>
              <div>
                <p>occupation</p>
                <p>Array</p>
                <p>List of character's known occupation</p>
              </div>
              <div>
                <p>img</p>
                <p>string</p>
                <p>Character's image</p>
              </div>
              <div>
                <p>status</p>
                <p>string</p>
                <p>Are they alive (or did Heisenberg get to them??)</p>
              </div>
              <div>
                <p>nickname</p>
                <p>string</p>
                <p>A known nickname they are refered as.</p>
              </div>
              <div>
                <p>appearance</p>
                <p>array</p>
                <p>List of seasons that the character appeared in</p>
              </div>
            </div>
            <h4 id='char_all'>Get all characters</h4>
            <p>Endpoint to retrieve information from all characters.</p>
            <p className="example">/api/characters</p>
            <h4 id='char_id'>Get single character</h4>
            <p >Example request by character id. </p>
            <p className="example">/api/characters/1</p>
            <div className="example code">{example}</div>
            <h4 id='char_rand'>Get random character</h4>
            <p>Request a random character</p>
            <p className="example">/api/character/random</p>
            <h4 id='char_pag'>Limit & Offset</h4>
            <p>
              Use a query parameter to limit the amount of characters you
              receive, and to offset the starting number. Consider the following
              request.
            </p>
            <p className="example">/api/characters?limit=10&offset=10</p>
            <p className="offset">
              This request would give you an array of 10 characters, starting at
              index 10 (the 11th id).
            </p>
            <h4 id='char_name'>Search character by name</h4>
            <p className="example">/api/characters?name=Walter+White</p>
            <p>
              Notice the 'plus sign' between the first and last name represents
              a space. This query only works with the full name of a character.
              Double check your spelling!
            </p>
          </div>
          <div>
            <h3 id="ep">Episode Endpoint</h3>
            <h4 id='ep_at'>Episode Attributes</h4>
            <div className="schema">
              <div>
                <p>Attribute</p>
                <p>Type</p>
                <p>Description</p>
              </div>
              <div>
                <p>id</p>
                <p>integer</p>
                <p>Unique Id per episode</p>
              </div>
              <div>
                <p>title</p>
                <p>string</p>
                <p>The title of the episode</p>
              </div>
              <div>
                <p>season</p>
                <p>integer</p>
                <p>The season that the episode belongs to</p>
              </div>
              <div>
                <p>episode</p>
                <p>integer</p>
                <p>The episode number of it's season</p>
              </div>
              <div>
                <p>air_date</p>
                <p>string</p>
                <p>The original air date of the episode</p>
              </div>
              <div>
                <p>characters</p>
                <p>array</p>
                <p>Main characters that are associated with the episode</p>
              </div>
            </div>
            <h4 id='ep_all'>Get all episodes</h4>
            <p>Endpoint to retrieve all Episodes</p>
            <p className="example">/api/episode</p>
            <h4 id='ep_id'>Get episode by id</h4>
            <p>Example Episode Endpoint by id</p>
            <p className="example">/api/episode/60</p>
            <div className="example code">{example2}</div>
          </div>
          <div>
            <h3 id="q">Quote Endpoint</h3>
            <h4 id='q_at'>Quote Attributes</h4>
            <div className="schema">
              <div>
                <p>Attribute</p>
                <p>Type</p>
                <p>Description</p>
              </div>
              <div>
                <p>id</p>
                <p>integer</p>
                <p>Unique Id per quote</p>
              </div>
              <div>
                <p>quote</p>
                <p>string</p>
                <p>The quote itself</p>
              </div>
              <div>
                <p>author</p>
                <p>string</p>
                <p>The originator of the quote</p>
              </div>
             
            </div>
            <h4 id='q_all'>Get all quotes</h4>
            <p>Endpoint to retrieve all Quotes</p>
            <p className="example">/api/quotes</p>
            <h4 id='q_rand'>Get a random quote</h4>
            <p>Endpoint to retrieve a random quote</p>
            <p className="example">/api/quote/random</p>
            <h4 id='q_id'>Get quote by author</h4>
            <p>
              Endpoint to collect all quotes from a specific author. Make sure
              to separate the first and last name with a 'plus sign'. Like the
              character query, you have to use the author's full name.{' '}
            </p>
            <p className="example">/api/quote?author=Jesse+Pinkman</p>
            <div className="example code">{example3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
