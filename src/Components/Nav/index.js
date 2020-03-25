import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
  font-size: 1.2em;
  letter-spacing: 1px;
  padding-top: 10px;
  margin-top: 1.5px;
  &:hover {
    margin-top: 0;
    border-top: 1.5px inset rgba(121, 180, 115, 0.4);
  }

  &.location {
    color: #487f5a;
  }

  &:active {
    color: #487f5a;
  }

  @media (max-width: 450px) {
    font-size: 0.9em;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: space-evenly;
  margin: 2% 0;
  padding: 1% 0;
  height: 40px;

  ${props =>
    props.secondary &&
    css`
      justify-content: flex-end;
      margin-right: 3%;
    `};
`;

const links = ['', 'About', 'Documentation', 'Playground'];

const Nav = () => {
  const [pathname, setPathname] = useState('');
  // const [active, setActive] = useState(false);

  useEffect(() => {
    setPathname(window.pathname)
  }, [])

  const map = links.map((e, i) => (
    <StyledLink
      className={pathname === `/${e}` ? 'location' : null}
      key={i}
      to={`/${e.toLowerCase()}`}
    >
      {e ? e : 'Home'}
    </StyledLink>
  ));

  return (
    <NavWrapper className="header" role="navigation">
      <NavContainer main>{map}</NavContainer>
    </NavWrapper>
  );
};

export default Nav;
