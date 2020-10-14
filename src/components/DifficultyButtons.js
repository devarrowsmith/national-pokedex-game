import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import refreshPokemonData from '../helpers/refreshPokemonData';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const DifficultyButtons = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <StyledButtonContainer>
    <Button
      onClick={async () => {
        console.log('Easy Click!');
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
        console.log('Hard Click!');
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
        console.log('Ultra Click!');
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
