import React from 'react';
import styled from 'styled-components';
import ConditionalBlock from './ConditionalBlock';

const StyledGrid = styled.div`
  width: 100%;
  background-color: darkslategrey;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Grid = ({ pokemonData }) => (
  <StyledGrid>
    {!pokemonData.pokemon[0]
      ? (<h1>loading...</h1>)
      : (pokemonData.pokemon.map((singlePokemon) => (
        <ConditionalBlock
          key={singlePokemon.species.name}
          sprite={singlePokemon.sprites.front_default}
          text={singlePokemon.species.name}
          selected={pokemonData.selected}
        />
      )))}
  </StyledGrid>
);

export default Grid;
