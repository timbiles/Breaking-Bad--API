import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  p {
    margin: 0;
    padding: 10px;
    background: #3b3b3b;
    color: #fff;
    border-radius: 5px 0 0 5px;
    font-size: 0.8em;
  }

  input {
    margin: 0;
    padding: 10px;
    width: 50vw;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 10px;
    border-radius: 0 5px 5px 0;

    &:focus {
      outline: none;
    }
  }
`;

const DataDisplay = styled.pre`
  width: 90vw;
  max-height: 245px;
  margin: 30px auto;
  padding: 10px;
  text-overflow: ellipsis;
  border: 1px solid black;
  overflow: scroll;
`;

const Playground = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const keydown = e => {
    e.key === 'Enter' && sendRequest();
  };

  const sendRequest = async url => {
    try {
      const request = await fetch(
        url || `https://www.breakingbadapi.com/api/${search}`
      );
      const response = await request.json();
      console.log(response);

      await setResults(JSON.stringify(response, null, 4));
    } catch (err) {
        setResults('Incorrect syntax. Try typing \'characters/1\', or take a look at the documentation.')
    }
  };

  useEffect(() => {
    sendRequest('https://www.breakingbadapi.com/api/characters/1');
  }, []);
  return (
    <div>
      <h4>Try it out!</h4>
      <SearchBar>
        <p>https://www.breakingbadapi.com/api/</p>
        <input
          type="text"
          placeholder="characters/1"
          onChange={updateSearch}
          onKeyDown={keydown}
        />
        <button onClick={() => sendRequest()}>Search!</button>
      </SearchBar>
      <p>Try typing in 'characters/1' and see what shows up!</p>
      <DataDisplay>
        <code>{results}</code>
      </DataDisplay>
    </div>
  );
};

export default Playground;
