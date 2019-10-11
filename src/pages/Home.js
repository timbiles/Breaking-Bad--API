import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Text, Highlight } from '../styles/homeStyle';

import Characters from '../Components/Characters/Characters';
import '../Components/Home/Home.scss';

const StyledLink = styled(Link)`
  color: #396447;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    transform: scale(1.02);
  }
`;

const Home = () => {
  const [characters, setCharacters] = useState([]);
  // Change this name Plz
  const [rd, setRd] = useState({});
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const getCharacters = await fetch('/api/home-page-characters?limit=12');
    const response = await getCharacters.json();
    await setCharacters(response);
  };

  const randomDeath = async () => {
    const getDeath = await fetch('/api/random-death');
    const response = await getDeath.json();
    setRd(response);
  };

  const navigation = e => {
    const { id } = e.target;
    if (id.includes('burg')) {
      setId(+id.replace(/\D/g, ''));
      setToggle(!toggle);
    } else {
      setToggle(false);
    }
  };

  const handlePress = async e => {
    if (e.key === 'Enter') {
      await setId(e.target.id);
      await setToggle(!toggle);
    }
  };

  const charMap = characters.map(e => (
    <Characters
      toggle={id === e.char_id && toggle}
      key={e.char_id}
      person={e}
      handlePress={handlePress}
    />
  ));

  const death = (
    <div className="death_info" key={rd.death_id}>
      <div>
        <h2>{rd.death}</h2>
        <img src={rd.img} alt={rd.death} />
      </div>
      <div>
        <h4>Cause of death:</h4>
        <p>{rd.cause}</p>
        <h4>Responsible:</h4>
        <p>{rd.responsible}</p>
        <h4>Last words:</h4>
        <p>"{rd.last_words}"</p>
      </div>
    </div>
  );

  return (
    <div onClick={navigation}>
      <Container>
        <Text primary>
          The Breaking Bad A<Highlight>P</Highlight>I
        </Text>
        <Text secondary>...Tread Lightly</Text>
      </Container>
      <>
        <h3>
          Check out the{' '}
          <StyledLink to="/documentation">documentation</StyledLink>!
        </h3>
      </>

      <div className="character_map">{charMap}</div>
      <div className="test_api">
        <div className="death_map">
          <div>
            <h3>Click here to find out about a random death!</h3>
            <button onClick={randomDeath}>Death!</button>
          </div>
          {rd.death && death}
        </div>
      </div>
    </div>
  );
};

export default Home;
