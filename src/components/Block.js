import React from 'react';
import styled from 'styled-components';
import PokemonSprite from './PokemonSprite';
import PokemonName from './PokemonName';

const StyledBlock = styled.div`
  height: 130px;
  width: 130px;
  margin: 0;
  padding: 0;
  background-color: lightskyblue;
`;

const Block = () => (
  <StyledBlock>
    <PokemonSprite />
    <PokemonName />
  </StyledBlock>
);

export default Block;
