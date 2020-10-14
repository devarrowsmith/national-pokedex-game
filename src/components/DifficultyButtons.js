import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const DifficultyButtons = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <StyledButtonContainer>
    <Button
      onClick={async () => {
        await setDifficulty({
          mode: 'easy',
          numPokemon: 6,
        });
      }}
    >
      Easy
    </Button>

    <Button
      onClick={async () => {
        await setDifficulty({
          mode: 'hard',
          numPokemon: 12,
        });
      }}
    >
      Hard
    </Button>

    <Button
      onClick={async () => {
        await setDifficulty({
          mode: 'ultra',
          numPokemon: 24,
        });
      }}
    >
      Ultra
    </Button>
  </StyledButtonContainer>
);

export default DifficultyButtons;
