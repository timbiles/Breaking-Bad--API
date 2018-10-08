import React, { Component } from 'react';

import './Docs.css';

class Docs extends Component {

  scrollClick = (e) => {
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
        <p>{'{'}</p>
        <p>{'"id": 9,'}</p>
        <p>{'"quote": "Funyuns are awesome.",'}</p>
        <p>{'"author": "Jesse Pinkman",'}</p>
        <p>{'},'}</p>
        <p>{'{'}</p>
        <p>{'"id": 10,'}</p>
        <p>{'"quote": "Ooooooh, Wire.",'}</p>
        <p>{'"author": "Jesse Pinkman",'}</p>
        <p>{'},'}</p>
        <p>. . .</p>
      </div>
    );

    return (
      <div className="documentation">
        <nav className="navbar">
          <p onClick={() => this.scrollClick('char')}>Characters</p>
          <p onClick={() => this.scrollClick('ep')}>Episodes</p>
          <p onClick={() => this.scrollClick('q')}>Quotes</p>
          <p />
          <p />
        </nav>
        <div className="docs_main">
          <h2>Documentation</h2>
          <p>
            Welcome to the Breaking Bad API! This documentation should supply
            with you all the information you need to start making your HTTP
            requests. Look over this before you get started on your project, and
            don't forget about the ice trays!
          </p>
          <div>
            <h4>Base Url</h4>
            <p className="example">/api/</p>
          </div>
          <div>
            <h3 id="char">Characters Endpoint</h3>
            <p>Endpoint to retrieve information from all characters.</p>
            <p className="example">/api/characters</p>
            <p>Example request by character id. </p>
            <p className="example">/api/characters/1</p>
            <div className="example code">{example}</div>
            <p>Request a random character</p>
            <p className="example">/api/character/random</p>
            <h4>Limit & Offset</h4>
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
            <h4>Name</h4>
            <p className="example">/api/characters?name=Walter+White</p>
            <p>
              Notice the 'plus sign' between the first and last name represents
              a space. This query only works with the full name of a character.
              Double check your spelling!
            </p>
          </div>
          <div>
            <h3 id='ep'>Episode Endpoint</h3>
            <p>Endpoint to retrieve all Episodes</p>
            <p className="example">/api/episode</p>
            <p>Example Episode Endpoint by id</p>
            <p className="example">/api/episode/60</p>
            <div className="example code">{example2}</div>
          </div>
          <div>
            <h3 id='q'>Quote Endpoint</h3>
            <p>Endpoint to retrieve all Quotes</p>
            <p className="example">/api/quotes</p>
            <p>Endpoint to retrieve a random quote</p>
            <p className="example">/api/quote/random</p>
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
