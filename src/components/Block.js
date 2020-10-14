import React from 'react';
import styled from 'styled-components';
import PokemonSprite from './PokemonSprite';
import PokemonName from './PokemonName';

const StyledBlock = styled.div`
  height: 130px;
  width: 130px;
  margin: 10px;
  background-color: lightskyblue;
`;

const Block = ({ pokemonName, pokemonSprite }) => (
  <StyledBlock>
    <PokemonSprite
      sprite={pokemonSprite}
      name={pokemonName}
    />
    <PokemonName
      name={pokemonName}
    />
  </StyledBlock>
);

export default Block;
