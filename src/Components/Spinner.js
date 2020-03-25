import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #487f5a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} .75s linear infinite;
  margin: 20px auto;
`;

export default LoadingSpinner;
