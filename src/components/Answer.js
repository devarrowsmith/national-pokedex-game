import React from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.6em;
  line-height: 1.4em;
  text-align: center;

  span {
    color: #FFFF33;
  }
`;

const Answer = () => (
  <StyledAnswer>
    <h3>
      #
      <span>103: </span>
      Fletchinder
    </h3>

  </StyledAnswer>
);
export default Answer;
