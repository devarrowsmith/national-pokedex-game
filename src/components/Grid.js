import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ConditionalBlock from './ConditionalBlock';
import grassBackground from '../assets/grass-background.png';
import cloudBackground from '../assets/cloud-background.png';

const parallax = keyframes`
from {
  background-position-x: 0px, 0px;
}
to {
  background-position-x: 2160px, -1080px;
}
`;

const GridContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 340px);
  height: 100%;
  margin-top: 340px;
  background-image: url(${grassBackground}), url(${cloudBackground});
  background-position: right bottom, left top;
  background-repeat: repeat-x, repeat-x;
  background-size: 800px 450px, 640px 360px;
  bvackground-attachment: fixed, fixed;
  animation: ${parallax} 160s linear infinite;
  background-color: cornflowerblue;
`;

const StyledGrid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    color: FFFF00;
    text-shadow: -3px 3px 0 #000, 3px 3px 0 #000, 3px -3px 0 #000, -3px -3px 0 #000;
  }

  @media (min-width: 500px) {
    width: 500px;
  }
`;

const Grid = ({ pokemonData, setPokemonData }) => (
  <GridContainer className="test">
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
