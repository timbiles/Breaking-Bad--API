import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container, HomeHeader, SubText, Highlight } from '../styles/homeStyle';

import Characters from '../Components/Characters/Characters';
import '../Components/Home/Home.scss';

import betterCallSaulLogo from '../utils/assets/icons/button.jpg';
import breakingBadLogo from '../utils/assets/icons/breaking_bad.jpg';

const HomeWrapper = styled.main`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #396447;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    transform: scale(1.02);
  }
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const IconContainer = styled.section`
    width: max-content;
    margin-left: auto;
    margin-right: 20px;
    margin-top: -60px;
`;

const StyledIcon = styled.img`
  height: ${({height}) => height && height};
  width: ${({width}) => width && width};
  margin: 5px;
  cursor: pointer;

  padding-bottom: ${({secondary}) => secondary && '5px'};
  margin-bottom: ${({primary}) => primary && '3px'};
  border-bottom: ${({primary}) => primary && '2px inset rgba(121, 180, 115, .4)'};

  &:hover {
    opacity: .6;
  }
`;

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [display, setDisplay] = useState('Breaking Bad');
  // Change this name Plz
  const [rd, setRd] = useState({});
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    getRandom();
  }, [display]);

  const getRandom = async () => {
    const getCharacters = await fetch(`/api/home-page-characters?limit=12&category=${display}`);
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
      homeDisplay={display}
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
    <HomeWrapper onClick={navigation} role="main">
      <Container>
        <HomeHeader>
          The Breaking Bad A<Highlight>P</Highlight>I
        </HomeHeader>
        <SubText>...Tread Lightly</SubText>
      </Container>
      <>
        <StyledText>Now with Better Call Saul Data!</StyledText>
        <h2 style={{ fontSize: '18px' }}>
          Check out the{' '}
          <StyledLink to="/documentation">documentation</StyledLink>!
        </h2>
      </>
      <IconContainer>
        <StyledIcon
          primary={display === 'Breaking Bad'}
          secondary
          height="40px"
          width="40px"
          onClick={() => setDisplay('Breaking Bad')}
          style={{ height: '40px', width: '40px' }}
          src={breakingBadLogo}
          alt="Breaking Bad Icon"
        />
        <StyledIcon
          primary={display === 'Better Call Saul'}
          height="50px"
          width="50px"
          onClick={() => setDisplay('Better Call Saul')}
          src={betterCallSaulLogo}
          alt="Better Call Saul Icon"
        />
      </IconContainer>
      {/* <div>
        {display} characters
      </div> */}

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
    </HomeWrapper>
  );
};

export default Home;
