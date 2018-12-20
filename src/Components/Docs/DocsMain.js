import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Highlight } from '../../styles/homeStyle';
import { example, example2, example3, example4 } from '../Code/code';
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
    // this.setState({ highlight: this.highlight(navigation) });
    this.highlight(navigation)
  };

  highlight = nav => {
    const header = document.querySelector('.header');
    const top = header.getBoundingClientRect().height || 0;

    for (let i = 0; i < nav.length; i++) {
        const find = document.getElementById(nav[i].id);
        const individualTop = find.getBoundingClientRect().top;
        const individualBottom = find.getBoundingClientRect().bottom
        const navId = document.getElementById(`${nav[i].id}b`);
        let current; 

        if(individualTop - top <=10 && individualBottom - top >= 0) {
          navId.className = 'active';
          current = navId.id
        //   while (current === navId.id){
        //     navId.className = 'active'
        //     console.log(current, navId.id)
        // }
        } else {
                navId.className = ''            
            }
        // console.log(current, navId.id)

        // while (current === navId.id){
        //     navId.className = 'active'
        // }

        // if(current === navId.id) {
        //     document.getElementById(current).className = 'active'
        //     // navId.className = 'active'
        //     // navId.className = 'active'
        //     console.log(current)
        // } else {
        //     navId.className = ''            
        // }
    }
  };

  render() {
    return (
      <div ref="holder" className="docs_main">
        <h3 id="doc">
          Document
          <Highlight id="doc_mark">At</Highlight>
          ion
        </h3>
        <p>
          Welcome to the Breaking Bad API! This documentation should supply with
          you all the information you need to start making your HTTP requests.
          Give our documentation a read before you get started on your project,
          and don't forget about the ice trays!
        </p>
        <h4 id="rate">Rate Limit</h4>
        <p>
          This API is free, I have no intention of creating authentication.
          However, to prevent harmful activity, there is a rate limit of 10,000
          requests a day. If you happen to reach that limit, you will receive a
          429 status code, and regain access after 24 hours.
        </p>
        <div>
          <h4 id="base">Base Url</h4>
          <p className="example">https://www.breakingbadapi.com/api/</p>
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
            Use a query parameter to limit the amount of characters you receive,
            and to offset the starting number. Consider the following request.
          </p>
          <p className="example">/api/characters?limit=10&offset=10</p>
          <p className="offset">
            This request would give you an array of 10 characters, starting at
            index 10 (the 11th id).
          </p>
          <h4 id="char_name">Search character by name</h4>
          <p className="example">/api/characters?name=Walter+White</p>
          <p className="offset">
            Notice the 'plus sign' between the first and last name represents a
            space. This query only works with the full name of a character.
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
          <p className="example">/api/episodes</p>
          <h4 id="ep_id">Get episode by id</h4>
          <p>Example Episode Endpoint by id</p>
          <p className="example">/api/episodes/60</p>
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
            Endpoint to collect all quotes from a specific author. Make sure to
            separate the first and last name with a 'plus sign'. Like the
            character query, you have to use the author's full name.{' '}
          </p>
          <p className="example">/api/quote?author=Jesse+Pinkman</p>
          <div className="example code">{example3}</div>
          <h4 id="q_rand_auth">Get a random quote by author</h4>
          <p>Endpoint to retrieve a random quote by a specific author</p>
          <p className="example">/api/quote/random?author=Skyler+White</p>
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
          <h4 id="death_all">Get all death information</h4>
          <p>
            Endpoint to retrieve information about every death in Breaking Bad.
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
            Interested to see the number of deaths an individual was responsible
            for? Enter the name as a query parameter like the example below to
            find out.
          </p>
          <p className="example">/api/death-count?name=Gustavo+Fring</p>
          <div className="example code">{example4}</div>
          <p className="offset">
            Be aware, not just any name will work. They have to have caused, or
            been affiliated with the death in some capacity. Don't forget about
            the 'plus sign' between the first and last name!
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
    );
  }
}

export default DocsMain;
