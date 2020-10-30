import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.8em;
  line-height: 1.4em;
  text-align: center;

  span {
    color: #FFFF33;
  }
`;

const WinMessage = () => (
  <StyledMessage>
    You did it!
  </StyledMessage>
);

export default WinMessage;
