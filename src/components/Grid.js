import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const StyledGrid = styled.div`
  width: 100%;
  background-color: darkslategrey;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Grid = ({ pokemon }) => (
  <StyledGrid>
    {!pokemon[0]
      ? (<h1>loading...</h1>)
      : (pokemon.map((singlePokemon) => (
        <Block
          key={singlePokemon.species.name}
          pokemonName={singlePokemon.species.name}
          pokemonSprite={singlePokemon.sprites.front_default}
        />
      )))}
  </StyledGrid>
);

export default Grid;
