import React from 'react';
import styled from 'styled-components';
import PokemonSprite from './PokemonSprite';
import PokemonName from './PokemonName';

const StyledBlock = styled.div`
  background-color: lightskyblue;
  height: 100px;
  width: 100px;
`;

const Block = () => (
  <StyledBlock>
    <PokemonSprite />
    <PokemonName />
  </StyledBlock>
);

export default Block;
