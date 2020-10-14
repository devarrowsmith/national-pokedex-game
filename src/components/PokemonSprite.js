import React from 'react';
import styled from 'styled-components';

const StyledSprite = styled.img`
  height: 70%;
`;

const PokemonSprite = ({ sprite, name }) => (
  <StyledSprite 
    src={sprite}
    alt={name}
  />
);

export default PokemonSprite;
