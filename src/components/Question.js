import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.4em;
  line-height: 1.4em;
  text-align: center;

  span {
    color: #FFFF33;
  }
`;

const Question = () => (
  <StyledQuestion>
    Which Pokémon has National Pokedex Number
    <span> 103 </span>
    ?
  </StyledQuestion>
);
export default Question;
