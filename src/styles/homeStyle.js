import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: inline-block;
  margin-bottom: 30px;
`;

export const HomeHeader = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 56px;

  @media (max-width: 680px) {
    font-size: 32px;
  }

`;

export const SubText = styled.p`
  margin: 0;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: right;

  @media (max-width: 680px) {
    font-size: 14px;
  }
`;

export const Highlight = styled.mark`
  color: #487f5a;
  background: #fff;
  text-shadow: 1px 1px #000;
  text-shadow: ${props => props.secondary && 'none'}
`;
