import React from 'react';
import styled from 'styled-components';

const StyledLoadingMessage = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.8em;
  line-height: 1.4em;
  text-align: center;

  span {
    color: #FFFF33;
  }
`;

const LoadingMessage = () => (
  <StyledLoadingMessage>
    Loading...
  </StyledLoadingMessage>
);
export default LoadingMessage;
