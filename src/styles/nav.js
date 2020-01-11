import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
  font-size: 1.2em;
  letter-spacing: 1px;
  padding-top: 10px;  
  margin-top: 1.5px;
  &:hover{
    margin-top: 0;
    border-top: 1.5px inset rgba(121, 180, 115, .4);
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

export const MainWrapper = styled.nav`
  display: flex;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
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

  @media (max-width: 680px) {
    width: 70vw;
  }
`;

export const Input = styled.input`
  height: 2em;
  width: ${props => props && props.width};
  transition: .5s;

  ::placeholder {
    color: ${props => props && props.color};
  }

  :focus {
    outline: none;
  }
`

export const Btn = styled.button`
  height: 2em;
  margin: 0 5px;
`
