import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import refreshPokemonData from '../helpers/refreshPokemonData';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const ResetButton = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <StyledButtonContainer>
    <Button
      onClick={() => {
        console.log('Easy Click!');
        setDifficulty({
          mode: 'easy',
          numPokemon: 6,
        });
        refreshPokemonData(setBusy, setPokemonData, difficulty);
      }}
    >
      Easy
    </Button>

    <Button
      onClick={() => {
        console.log('Hard Click!');
        setDifficulty({
          mode: 'hard',
          numPokemon: 12,
        });
        refreshPokemonData(setBusy, setPokemonData, difficulty);
      }}
    >
      Hard
    </Button>

    <Button
      onClick={() => {
        console.log('Ultra Click!');
        setDifficulty({
          mode: 'ultra',
          numPokemon: 24,
        });
        refreshPokemonData(setBusy, setPokemonData, difficulty);
      }}
    >
      Ultra
    </Button>
  </StyledButtonContainer>
);

export default ResetButton;
