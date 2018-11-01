import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
  font-size: 1.2em;
  letter-spacing: 1px;
  &:hover {
    transform: scale(1.02);
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
  margin: 3% 0;
  padding: 1% 0;
  height: 40px;

  @media (max-width: 680px) {
    width: 70vw;
  }
`;
