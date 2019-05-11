import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Highlight } from '../styles/homeStyle';
import { Title } from './About';

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
  min-width: max-content;
  border: 1px solid #3b3b3b;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 0.9em;
  margin: 2vh 5vw;

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
      margin-top: -2px; 
      border-top: 1px inset rgba(121, 180, 115, 0.4);
      text-shadow: .05px .05px #000;

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
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [responseInfo, setResponse] = useState('');

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const keydown = e => {
    e.key === 'Enter' && sendRequest(search);
  };

  const clickSearch = e => {
    sendRequest(e.target.innerText);
  };

  const sendRequest = async url => {
    try {
      const request = await fetch(`/api/${url}`);
      const response = await request.json();

      if (response[0].char_id) {
        if (response.length > 1) {
          setResponse('Information from a list of characters.');
        } else {
          setResponse(`Information from ${response[0].name}`);
        }
      } else if (response[0].episode_id) {
        if (response.length > 1) {
          setResponse('Information from a list of episodes.');
        } else {
          setResponse(`Information on episode "${response[0].title}"`);
        }
      } else if (response[0].quote_id) {
        if (response.length > 1) {
          setResponse('Information from a list of quotes.');
        } else {
          setResponse(`A quote from ${response[0].author}`);
        }
      } else if (response[0].death_id) {
        if (response.length > 1) {
          setResponse('Information from a list of deaths.');
        } else {
          setResponse(`Information from the death of ${response[0].death}`);
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
      <Title>
        Data Playgrou<Highlight>Nd</Highlight>
      </Title>
      <SearchBar>
        <p>https://www.breakingbadapi.com/api/</p>
        <input
          type="text"
          onChange={updateSearch}
          onKeyDown={keydown}
          defaultValue="characters/1"
        />
        <SearchButton onClick={() => sendRequest(search)}>Search!</SearchButton>
      </SearchBar>
      <SmallText>
        Click one of the options below to test some results!
      </SmallText>
      <ButtonContainer>
        <button onClick={clickSearch}>characters/8</button>
        <button onClick={clickSearch}>episodes/60</button>
        <button onClick={clickSearch}>quote?author=Jesse+Pinkman</button>
        <button onClick={clickSearch}>death-count?name=Gustavo+Fring</button>
      </ButtonContainer>
      <DataDisplay>
        <h2>{responseInfo}</h2>
        <code>{results}</code>
      </DataDisplay>
    </>
  );
};

export default Playground;
