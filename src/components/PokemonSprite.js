import React from 'react';
import styled from 'styled-components';

const StyledSprite = styled.img`
  height: 70%;
  background-color: yellow;
`;

const PokemonSprite = ({ sprite, name }) => (
  <StyledSprite 
    src={sprite}
    alt={name}
  />
);

export default PokemonSprite;
