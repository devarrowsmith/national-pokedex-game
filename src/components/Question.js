import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  line-height: 1.4em;
  text-align: center;

  span {
    color: #FFFF33;
  }
`;

const Question = () => (
  <StyledQuestion>
    <h3>
      Which Pokémon has National Pokedex Number
      <span> 103 </span>
      ?
    </h3>

  </StyledQuestion>
);
export default Question;