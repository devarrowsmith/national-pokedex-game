import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ConditionalBlock from './ConditionalBlock';

const GridContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const StyledGrid = styled.div`
  margin: 300px 0 0 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (min-height: 600px) {
    margin: 300px 0 0 0;
  }

  @media (min-width: 500px) {
    width: 500px;
  }
`;

const Grid = ({ pokemonData, setPokemonData }) => (
  <GridContainer>
    <StyledGrid>
      {!pokemonData.pokemon[0]
        ? (<h1>loading...</h1>)
        : (pokemonData.pokemon.map((singlePokemon) => (
          <ConditionalBlock
            key={singlePokemon.species.name}
            sprite={singlePokemon.sprites.front_default}
            text={singlePokemon.species.name}
            dexNumber={singlePokemon.id}
            pokemonData={pokemonData}
            setPokemonData={setPokemonData}
          />
        )))}
    </StyledGrid>
  </GridContainer>
);

Grid.propTypes = {
  pokemonData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  setPokemonData: PropTypes.func.isRequired,
};

export default Grid;
