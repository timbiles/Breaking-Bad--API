import styled from 'styled-components';

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 2% 1% 2%;
  border-top: 1px solid #7b7b7b;
  position: relative;

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  height: 30px;
  left: 1%;
  top: 20%;
  cursor: pointer;
  transition: ease-out 1s;

  &:hover {
    fill: #487f5a;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Text = styled.p`
  @media (max-width: 600px) {
    font-size: 0.7em;
  }
  @media (max-width: 400px) {
    font-size: 0.6em;
  }
`;
