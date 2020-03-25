import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Highlight } from '../styles/homeStyle';
import { Title } from './About';
import Spinner from '../Components/Spinner';

const PlaygroundTitle = styled(Title)`
  width: max-content;
  margin: 30px auto;
`;

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
`;

const SearchInput = styled.input`
  margin: 0;
  padding: 10px;
  width: 50vw;
  border: 1px solid #000;

  &:focus {
    outline: none;
  }
`;

const SubHeader = styled.h4`
  margin: 50px auto 10px;
  width: 60vw;
  font-weight: 400;
`;

const SearchButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  min-width: max-content;
  border: 1px solid #3b3b3b;
  border-left: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background: #444;
    color: #fff;
    transition: 0.15s ease all;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);
    background: #444;
    color: #fff;
  }
`;

const ResponseHeader = styled.h4`
  font-size: 18px;
  width: 90vw;
  margin: auto;
  margin-top: 40px;
  margin-bottom: -20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 0.9em;
  margin: 2vh auto;
  max-width: 600px;

  button {
    cursor: pointer;
    border: none;
    padding: 5px 0;

    &:active {
      transform: scale(0.98);
    }
    &:focus {
      outline: none;
    }
    &:hover {
      border-left: none;
      margin-top: -1px;
      border-top: 1px inset rgba(121, 180, 115, 0.4);
      text-shadow: 0.05px 0.05px #000;
    }
  }
`;

const DataDisplay = styled.pre`
  width: 90vw;
  max-height: 500px;
  margin: 30px auto;
  padding: 10px;
  text-overflow: ellipsis;
  box-shadow: 1px 1px 5px 2px #ddd;
  overflow: scroll;
  background: #fafafa;
`;

const Playground = () => {
  const [search, setSearch] = useState('characters/1');
  const [results, setResults] = useState('');
  const [responseInfo, setResponse] = useState('');

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const keydown = e => {
    e.key === 'Enter' && sendRequest(search);
  };

  const clickSearch = e => {
    setSearch(e.target.name);
    sendRequest(e.target.name);
  };

  const sendRequest = async url => {
    try {
      const request = await fetch(`/api/${url}`);
      const response = await request.json();

      if (response[0].char_id) {
        if (response.length > 1) {
          setResponse(`A list of characters. (${response.length})`);
        } else {
          setResponse(`Information on ${response[0].name}`);
        }
      } else if (response[0].episode_id) {
        if (response.length > 1) {
          setResponse('A list of episodes.');
        } else {
          setResponse(`Information on episode "${response[0].title}"`);
        }
      } else if (response[0].quote_id) {
        if (response.length > 1) {
          setResponse('A list of quotes.');
        } else {
          setResponse(`A quote from ${response[0].author}`);
        }
      } else if (response[0].death_id || response[0].deathCount) {
        if (response.length > 1) {
          setResponse('A list of deaths.');
        } else {
          setResponse(
            `Information on the deaths deaths caused by ${response[0].name}`
          );
        }
      }

      await setResults(JSON.stringify(response, null, 4));
    } catch (err) {
      setResults(
        "Incorrect syntax. Try typing 'characters/1', or take a look at the documentation."
      );
      setResponse('');
    }
  };

  useEffect(() => {
    sendRequest('characters/1');
  }, []);

  return (
    <>
      <PlaygroundTitle>
        Data Playgrou<Highlight>Nd</Highlight>
      </PlaygroundTitle>
      <SubHeader>
        Try typing in the search bar below to look up any info you can think of!
        Use the categories below as a starting point.
      </SubHeader>
      <SearchBar>
        <p>https://www.breakingbadapi.com/api/</p>
        <SearchInput
          type="text"
          onChange={updateSearch}
          onKeyDown={keydown}
          value={search}
        />
        <SearchButton onClick={() => sendRequest(search)}>Search!</SearchButton>
      </SearchBar>
      <ButtonContainer>
        <button onClick={clickSearch} name="characters/8">
          Characters
        </button>
        <button onClick={clickSearch} name="episodes/60">
          Episodes
        </button>
        <button onClick={clickSearch} name="quote?author=Jesse+Pinkman">
          Quotes
        </button>
        <button onClick={clickSearch} name="death-count?name=Gustavo+Fring">
          Deaths
        </button>
      </ButtonContainer>
      <ResponseHeader>Results:</ResponseHeader>
      <DataDisplay>
        {!results ? (
          <Spinner />
        ) : (
          <Fragment>
            <h2>{responseInfo}</h2>
            <code>{results}</code>
          </Fragment>
        )}
      </DataDisplay>
    </>
  );
};

export default Playground;
