import React from 'react';
import styled, { css } from 'styled-components';

import { Highlight } from '../styles/homeStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.primary ? 'center' : 'flex-start')};

  ${props =>
    props.secondary &&
    css`
      width: 60%;
      text-align: left;

      @media (max-width: 900px) {
        width: 90%;
      }
    `}
`;

export const Title = styled.h2`
  letter-spacing: 2px;

  ${props =>
    props.secondary &&
    css`
      width: 100%;
      color: #396447;
      padding-bottom: 1%;
      border-bottom: 1px solid #c9c9c9;
    `}
`;

const Text = styled.p`
  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`;

const Link = styled.a`
  color: #396447;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    transform: scale(1.02);
  }
`;

const List = styled.li`
  margin-left: 60px;
  font-size: 0.9em;
  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`;

const About = () => (
  <Container primary>
    <Title>
      Say my <Highlight>N</Highlight>ame
    </Title>
    <Container secondary>
      <Title secondary>Who</Title>
      <Text>
        Hi, I'm Tim Biles. I am a developer in the Dallas, Fort Worth area in
        Texas. Breaking Bad is my favorite TV show. Check out my portfolio{' '} 
        <Link href="https://timbilestim.netlify.com/" target="blank">
          here
        </Link> 
         !
      </Text>
      <Title secondary>What</Title>
      <Text>
        The Breaking Bad API is a collection of information on the Vince
        Gilligan series. This site is designed to make it easy on the developer
        to see what HTTP requests are possible, and what information is
        available.
      </Text>
      <ul>
        <Text>The following information is provided through this API...</Text>
        <List>Characters</List>
        <List>Episodes</List>
        <List>Quotes</List>
        <List>Deaths</List>
      </ul>
      <Title secondary>Why</Title>
      <Text>
        Breaking Bad is regarded as one of the greatest television series of all
        time, and with 16 Primetime Emmy Awards, it is worthy of it's own API.
        In my search, I was unable to find an API that contained the amount of
        information I wanted, so I created one.
      </Text>
      <Title secondary>Tech Stack</Title>
      <Text>
        This project was build using Javascript, React, Node, Express, and
        Massive.
      </Text>
      <Title secondary>Issues</Title>
      <Text>
        If you come across any errors, please contribute by creating an issue on{' '} 
        <Link
          href="https://github.com/timbiles/Breaking-Bad--API"
          target="blank"
        >{' '} 
          GitHub
        </Link>
        ! I will gladly correct them as soon as I can.
      </Text>
      <Title secondary>Contact</Title>
      <Text>
        If you would like to talk about a project you are wanting to build, or
        just to connect, please head over to my portfolio and send me a message.
        I would love to chat with you about your idea!
      </Text>
      <Title secondary>Copyright</Title>
      <Text>
        I do not own the rights to any material provided in this API. Breaking
        Bad was created by Vince Gilligan, and originally aired on AMC. The
        majority of this data collected was from a{' '} 
        <Link href="https://en.wikipedia.org/wiki/Breaking_Bad" target="blank">
          Wikipedia.com
        </Link>{' '} 
        and{' '} 
        <Link
          href="http://breakingbad.wikia.com/wiki/Breaking_Bad_Wiki"
          target="blank"
        >{' '} 
          Wikia.com
        </Link>.
      </Text>
      <Text>This site is licensed under the "New" BSD 3-Clause License.</Text>
    </Container>
  </Container>
);

export default About;
