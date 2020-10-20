import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import difficulties from '../helpers/difficulties';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const DifficultyButtons = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <StyledButtonContainer>
    {difficulties.map((difficulty) => (
      <Button
        onClick={() => {
          setDifficulty({
            mode: difficulty.mode,
            numPokemon: difficulty.numPokemon,
          });
        }}
      >
        {difficulty.mode}
      </Button>
    ))}
  </StyledButtonContainer>
);

export default DifficultyButtons;
