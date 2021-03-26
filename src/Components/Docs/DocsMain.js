import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Highlight } from '../../styles/homeStyle';
import {
  characterExample,
  multipleCharacterExample,
  episodeExample,
  quoteExample,
  deathExample,
} from '../Code/code';
import navigation from '../../data/navigation.json';

class DocsMain extends Component {
  componentDidMount() {
    if (navigation.length > 0) {
      this.changeClass();
      const holder = ReactDOM.findDOMNode(this.refs.holder);
      holder.addEventListener('scroll', this.changeClass);
    }
  }

  componentWillUnmount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder);
    holder.removeEventListener('scroll', this.changeClass);
  }

  changeClass = () => {
    this.highlight(navigation);
  };

  highlight = (nav) => {
    const header = document.querySelector('.header'),
      top = header.getBoundingClientRect().height;

    for (let i = 0; i < nav.length; i++) {
      const find = document.getElementById(nav[i].id),
        idTop = find.getBoundingClientRect().top,
        idBottom = find.getBoundingClientRect().bottom,
        navId = document.getElementById(`${nav[i].id}b`);

      if (idTop - top <= 10 && idBottom - top >= 0) {
        navId.className = 'active';
      } else {
        navId.classList.remove('active');
      }
    }
  };

  render() {
    const updateStyles = {
      background: '#3b3b3b',
      fontWeight: '900',
      fontSize: '16px',
      textDecoration: 'underline',
    };
    return (
      <div ref="holder" className="docs_main">
        <div id="doc">
          <h3>
            Document
            <Highlight id="doc_mark">At</Highlight>
            ion
          </h3>
          <p>
            Welcome to the Breaking Bad API! This documentation should supply
            with you all the information you need to start making your HTTP
            requests. Give our documentation a read before you get started on
            your project, and don't forget about the ice trays!
          </p>
          <p>
            <Highlight style={updateStyles}>All New</Highlight> -- Better Call
            Saul Data! Check out the new additions to characters, episodes, and
            quotes associated to the Vince Gilligan spin-off series. Since this
            show is currently airing, I have decided to leave out the deaths
            (for now).
          </p>
        </div>
        <div id="rate">
          <h4>Rate Limit</h4>
          <p>
            This API is free, I have no intention of creating authentication.
            However, to prevent harmful activity, there is a rate limit of
            10,000 requests a day. If you happen to reach that limit, you will
            receive a 429 status code, and regain access after 24 hours.
          </p>
        </div>
        <div id="base">
          <h4>Base Url</h4>
          <p className="example">https://www.breakingbadapi.com/api/</p>
        </div>
        <div>
          <h3 id="char">Character Endpoints</h3>
          <div id="char_at">
            <h4>Character Attributes</h4>
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
                <p>A character's full name</p>
              </div>
              <div>
                <p>birthday</p>
                <p>string</p>
                <p>A character's birthday</p>
              </div>
              <div>
                <p>occupation</p>
                <p>array</p>
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
                <p>A known nickname they are referred as.</p>
              </div>
              <div>
                <p>appearance</p>
                <p>array</p>
                <p>List of seasons that the character appeared in</p>
              </div>
              <div>
                <p>portrayed</p>
                <p>string</p>
                <p>The actor / actress that portrayed the character</p>
              </div>
              <div>
                <p>category</p>
                <p>array</p>
                <p>Series that the character is involved with. </p>
              </div>
            </div>
          </div>
          <div id="char_all">
            <h4>Get all characters</h4>
            <p>Endpoint to retrieve information from all characters.</p>
            <p className="example">/api/characters</p>
          </div>
          <div id="char_id">
            <h4>Get single character</h4>
            <p>Example request by character id. </p>
            <p className="example">/api/characters/1</p>
            <div className="example code">{characterExample}</div>
          </div>

          <div id="char_cat">
            <h4>Get character by category</h4>
            <p>
              Request characters by category, like 'Breaking Bad' or 'Better
              Call Saul'.
            </p>
            <p className="example">/api/characters?category=Better+Call+Saul</p>
            <p className="offset">
              This request accepts a query parameter of 'category'. You can also
              use the 'limit' and 'offset' query parameters.
            </p>
          </div>
          <div id="char_rand">
            <h4>Get random character</h4>
            <p>Request a random character</p>
            <p className="example">/api/character/random</p>
            <p className="offset">
              This request accepts a query parameter of 'limit'. If no limit is
              passed, (like the example above) you will only receive one random
              character.
            </p>
          </div>
          <div id="char_pag">
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
          </div>
          <div id="char_name">
            <h4>Search character by name</h4>
            <p className="example">/api/characters?name=Walter+White</p>
            <p className="offset">
              Notice the 'plus sign' between the first and last name represents
              a space. This query only works with the full name of a character.
              Double check your spelling!
            </p>
            <br />
            <p>
              You can also retrieve search results from like character names.
            </p>
            <p className="example">/api/characters?name=Walter</p>
            <div className="example code">{multipleCharacterExample}</div>
          </div>
        </div>
        <div>
          <h3 id="ep">Episode Endpoints</h3>
          <div id="ep_at">
            <h4>Episode Attributes</h4>
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
              <div>
                <p>series</p>
                <p>string</p>
                <p>Series that the episode belongs to</p>
              </div>
            </div>
          </div>
          <div id="ep_all">
            <h4>Get all episodes</h4>
            <p>Endpoint to retrieve all Episodes</p>
            <p className="example">/api/episodes</p>
          </div>

          <div id="ep_cat">
            <h4>Get episodes by series</h4>
            <p>
              Request to grab episodes by series (either 'Breaking Bad' or
              'Better Call Saul').
            </p>
            <p className="example">/api/episodes?series=Better+Call+Saul</p>
          </div>

          <div id="ep_id">
            <h4>Get episode by id</h4>
            <p>Example Episode Endpoint by id</p>
            <p className="example">/api/episodes/60</p>
            <div className="example code">{episodeExample}</div>
          </div>
        </div>
        <div>
          <h3 id="q">Quote Endpoints</h3>
          <div id="q_at">
            <h4>Quote Attributes</h4>
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
              <div>
                <p>series</p>
                <p>string</p>
                <p>The series the quote was told in</p>
              </div>
            </div>
          </div>
          <div id="q_all">
            <h4>Get all quotes</h4>
            <p>Endpoint to retrieve all Quotes</p>
            <p className="example">/api/quotes</p>
          </div>
          <div id="q_id">
            <h4>Get quote by id</h4>
            <p>Endpoint to get quote by id</p>
            <p className="example">/api/quotes/1</p>
          </div>
          <div id="q_series">
            <h4>Get quotes by series</h4>
            <p>Endpoint to retrieve all quotes from a series</p>
            <p className="example">/api/quote?series=Better+Call+Saul</p>
          </div>
          <div id="q_rand">
            <h4>Get a random quote</h4>
            <p>Endpoint to retrieve a random quote</p>
            <p className="example">/api/quote/random</p>
          </div>
          <div id="q_auth">
            <h4>Get quote by author</h4>
            <p>
              Endpoint to collect all quotes from a specific author. Make sure
              to separate the first and last name with a 'plus sign'. Like the
              character query, you have to use the author's full name.{' '}
            </p>
            <p className="example">/api/quote?author=Jesse+Pinkman</p>
            <div className="example code">{quoteExample}</div>
          </div>
          <div id="q_rand_auth">
            <h4>Get a random quote by author</h4>
            <p>Endpoint to retrieve a random quote by a specific author</p>
            <p className="example">/api/quote/random?author=Skyler+White</p>
          </div>
        </div>
        <div>
          <h3 id="death">Death Endpoints</h3>
          <div id="death_at">
            <h4>Death Attributes</h4>
            <div className="schema">
              <div>
                <p>Attribute</p>
                <p>Type</p>
                <p>Description</p>
              </div>
              <div>
                <p>id</p>
                <p>integer</p>
                <p>Unique Id per death</p>
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
                <p>The person(s) responsible or affiliated with the death</p>
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
          </div>
          <div id="death_all">
            <h4>Get all death information</h4>
            <p>
              Endpoint to retrieve information about every death in Breaking
              Bad.
            </p>
            <p className="example">/api/deaths</p>
          </div>
          <div id="death_inv">
            <h4>Get individual death information</h4>
            <p>
              Endpoint to retrieve information about an individuals death in
              Breaking Bad.
            </p>
            <p className="example">/api/death?name=Walter+White</p>
          </div>
          <div id="death_count">
            <h4>Get death count</h4>
            <p>
              If you're curious about the total number of deaths in the series,
              hit this endpoint!{' '}
            </p>
            <p className="example">/api/death-count</p>
          </div>
          <div id="death_name">
            <h4>Get death count by name</h4>
            <p>
              Interested to see the number of deaths an individual was
              responsible for? Enter the name as a query parameter like the
              example below to find out.
            </p>
            <p className="example">/api/death-count?name=Gustavo+Fring</p>
            <div className="example code">{deathExample}</div>
            <p className="offset">
              Be aware, not just any name will work. They have to have caused,
              or been affiliated with the death in some capacity. Don't forget
              about the 'plus sign' between the first and last name!
            </p>
          </div>
          <div id="death_rand">
            <h4>Get random death information about an individual</h4>
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

export default DocsMain;
