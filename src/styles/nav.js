import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
  font-size: 1.2em;
  letter-spacing: 1px;
  padding-top: 10px;  
  margin-top: 1.5px;
  &:hover {
    margin-top: 0;
    border-top: 1.5px inset rgba(121, 180, 115, .4);
  }

   &:active {
    color: #487f5a;
  }

  @media (max-width: 450px) {
    font-size: 0.9em;
  }
`;

export const MainWrapper = styled.div`
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

  @media (max-width: 680px) {
    width: 70vw;
  }
`;
