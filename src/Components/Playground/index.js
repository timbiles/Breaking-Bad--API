import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Highlight } from '../../styles/homeStyle';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 5px auto;

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
    border-radius: 0 5px 5px 0;

    &:focus {
      outline: none;
    }
  }
`;

const SmallText = styled.p`
  margin: 0;
`;

const SearchButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  width: 30vw;
  min-width: max-content;
  margin: 20px auto;
  border: 1px solid #3b3b3b;
  cursor: pointer;

  &:hover {
    background: #a0a0a0;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const DataDisplay = styled.pre`
  width: 90vw;
  max-height: 245px;
  margin: 30px auto;
  padding: 10px;
  text-overflow: ellipsis;
  box-shadow: 1px 1px 5px 2px #ddd;
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
        url || `/api/${search}`
      );
      const response = await request.json();
      console.log(response);

      await setResults(JSON.stringify(response, null, 4));
    } catch (err) {
      setResults(
        "Incorrect syntax. Try typing 'characters/1', or take a look at the documentation."
      );
    }
  };

  useEffect(() => {
    sendRequest('/api/characters/1');
  }, []);
  return (
    <>
      <h3>Test it out!</h3>
      <SearchBar>
        <p>https://www.breakingbadapi.com/api/</p>
        <input
          type="text"
          placeholder="characters/1"
          onChange={updateSearch}
          onKeyDown={keydown}
        />
      </SearchBar>
      <SmallText>
        Try typing in <Highlight secondary>'characters/1'</Highlight> and see
        what shows up!
      </SmallText>
      <SearchButton onClick={() => sendRequest()}>Search!</SearchButton>
      <DataDisplay>
        <code>{results}</code>
      </DataDisplay>
    </>
  );
};

export default Playground;
