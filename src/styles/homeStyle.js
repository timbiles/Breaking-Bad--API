import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: inline-block;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: ${props => (props.primary ? '3.5em' : '1em')};

  ${props =>
    props.primary &&
    css`
      font-weight: 700;
    `} ${props =>
    props.secondary &&
    css`
      letter-spacing: 2px;
      text-align: right;
    `};

    @media (max-width: 680px) {
    font-size: ${props => props.primary ? '2em' : '.9em'};
      }
`;

export const Highlight = styled.mark`
  color: #487f5a;
  background: #fff;
  text-shadow: 1px 1px #000;
`;
