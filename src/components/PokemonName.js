import React from 'react';
import styled from 'styled-components';

const StyledName = styled.p`
  margin: 0;
  padding: 0;
  background-color: green;
  text-align: center;
`;

const PokemonSprite = () => (
  <StyledName>
    Fletchinder
  </StyledName>
);

export default PokemonSprite;
