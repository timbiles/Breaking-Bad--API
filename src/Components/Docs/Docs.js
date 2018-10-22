import React, { Component } from 'react';

import './Docs.css';
import navigation from './data/navigation.json';

class Docs extends Component {
  scrollClick = e => {
    document
      .getElementById(e)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  hiddenNav = () => {};

  render() {
    // var example = <pre>{data}</pre>;

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
        <p>{'"appearance":    [1,2,3,4,5],'}</p>
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

    var example4 = (
      <div className="multi_line ml_4">
        <p>{'{'}</p>
        <p>{'"name": "Gustavo Fring",'}</p>
        <p>{'"deathCount": 22,'}</p>
        <p>{'}'}</p>
      </div>
    );

    const navMap = navigation.map((e, i) => {
      return React.createElement(
        e.tag,
        { onClick: () => this.scrollClick(e.id), key: i },
        e.name
      );
    });

    return (
      <div className="documentation">
        <nav className="navbar">
          {navMap}
          <div className="hamb" onClick={() => this.hiddenNav()} />
        </nav>
        <div className="docs_main">
          <h3 id="doc">Documentation</h3>
          <p>
            Welcome to the Breaking Bad API! This documentation should supply
            with you all the information you need to start making your HTTP
            requests. Give our documentation a read before you get started on
            your project, and don't forget about the ice trays!
          </p>
          <h4 id="rate">Rate Limit</h4>
          <p>
            This API is free, I have no intention of creating authentication.
            However, to prevent harmful activity, there is a rate limit of
            10,000 requests a day. If you happen to reach that limit, you will
            receive a 429 status code, and regain access after 24 hours.
          </p>
          <div>
            <h4 id="base">Base Url</h4>
            <p className="example">http://www.breakingbadapi.com/api/</p>
          </div>
          <div>
            <h3 id="char">Character Endpoints</h3>
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
            <h4 id="char_all">Get all characters</h4>
            <p>Endpoint to retrieve information from all characters.</p>
            <p className="example">/api/characters</p>
            <h4 id="char_id">Get single character</h4>
            <p>Example request by character id. </p>
            <p className="example">/api/characters/1</p>
            <div className="example code">{example}</div>
            <h4 id="char_rand">Get random character</h4>
            <p>Request a random character</p>
            <p className="example">/api/character/random</p>
            <p className="offset">
              This request accepts a query parameter of 'limit'. If no limit is
              passed, (like the example above) you will only receive one random
              character.
            </p>
            <h4 id="char_pag">Limit & Offset</h4>
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
            <h4 id="char_name">Search character by name</h4>
            <p className="example">/api/characters?name=Walter+White</p>
            <p className="offset">
              Notice the 'plus sign' between the first and last name represents
              a space. This query only works with the full name of a character.
              Double check your spelling!
            </p>
          </div>
          <div>
            <h3 id="ep">Episode Endpoints</h3>
            <h4 id="ep_at">Episode Attributes</h4>
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
            <h4 id="ep_all">Get all episodes</h4>
            <p>Endpoint to retrieve all Episodes</p>
            <p className="example">/api/episode</p>
            <h4 id="ep_id">Get episode by id</h4>
            <p>Example Episode Endpoint by id</p>
            <p className="example">/api/episode/60</p>
            <div className="example code">{example2}</div>
          </div>
          <div>
            <h3 id="q">Quote Endpoints</h3>
            <h4 id="q_at">Quote Attributes</h4>
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
            <h4 id="q_all">Get all quotes</h4>
            <p>Endpoint to retrieve all Quotes</p>
            <p className="example">/api/quotes</p>
            <h4 id="q_id">Get quote by id</h4>
            <p>Endpoint to get quote by id</p>
            <p className="example">/api/quotes/1</p>
            <h4 id="q_rand">Get a random quote</h4>
            <p>Endpoint to retrieve a random quote</p>
            <p className="example">/api/quote/random</p>
            <h4 id="q_auth">Get quote by author</h4>
            <p>
              Endpoint to collect all quotes from a specific author. Make sure
              to separate the first and last name with a 'plus sign'. Like the
              character query, you have to use the author's full name.{' '}
            </p>
            <p className="example">/api/quote?author=Jesse+Pinkman</p>
            <div className="example code">{example3}</div>
          </div>
          <div>
            <h3 id="death">Death Endpoints</h3>
            <h4 id="death_at">Death Attributes</h4>
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
                <p>death</p>
                <p>string</p>
                <p>The name of the deceased individual</p>
              </div>
              <div>
                <p>cause</p>
                <p>string</p>
                <p>How the character met their demise</p>
              </div>
              <div>
                <p>responsible</p>
                <p>string</p>
                <p>The person(s) responsible or affliated with the death</p>
              </div>
              <div>
                <p>last words</p>
                <p>string</p>
                <p>The famous last words!</p>
              </div>
              <div>
                <p>season</p>
                <p>integer</p>
                <p>The season the death occured in</p>
              </div>
              <div>
                <p>episode</p>
                <p>integer</p>
                <p>The episode of the season</p>
              </div>
              <div>
                <p className="schema_long">number_of_deaths</p>
                <p>integer</p>
                <p>The number of deaths that occured for this instance</p>
              </div>
            </div>
            <h4 id="death_all">Get all death information</h4>
            <p>
              Endpoint to retrieve information about every death in Breaking
              Bad.
            </p>
            <p className="example">/api/deaths</p>
            <h4 id="death_count">Get death count</h4>
            <p>
              If you're curious about the total number of deaths in the series,
              hit this endpoint!{' '}
            </p>
            <p className="example">/api/death-count</p>
            <h4 id="death_name">Get death count by name</h4>
            <p>
              Interested to see the number of deaths an individual was
              responsible for? Enter the name as a query parameter like the
              example below to find out.
            </p>
            <p className="example">/api/death-count?name=Gustavo+Fring</p>
            <div className="example code">{example4}</div>
            <p className="offset">
              Be aware, not just any name will work. They have to have caused,
              or been afiliated with the death in some capacity. Don't forget
              about the 'plus sign' between the first and last name!
            </p>
            <h4 id="death_rand">
              Get random death information about an individual
            </h4>
            <p>
              Hit this endpoint to find out some interesting information about a
              death at random!
            </p>
            <p className="example">/api/random-death</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
