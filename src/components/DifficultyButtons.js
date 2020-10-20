import React from 'react';
import styled from 'styled-components';
import DifficultyButton from './DifficultyButton';
import ButtonPlaceholder from './ButtonPlaceholder';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const DifficultyButtons = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <StyledButtonContainer>

    {(difficulty.mode === 'easy')
      ? (
        <ButtonPlaceholder mode="easy" />
      )
      : (
        <DifficultyButton
          mode="easy"
          numPokemon={6}
          setDifficulty={setDifficulty}
        />
      )}

    {(difficulty.mode === 'hard')
      ? (
        <ButtonPlaceholder mode="hard" />
      )
      : (
        <DifficultyButton
          mode="hard"
          numPokemon={12}
          setDifficulty={setDifficulty}
        />
      )}

    {(difficulty.mode === 'ultra')
      ? (
        <ButtonPlaceholder mode="ultra" />
      )
      : (
        <DifficultyButton
          mode="ultra"
          numPokemon={24}
          setDifficulty={setDifficulty}
        />
      )}
  </StyledButtonContainer>
);

export default DifficultyButtons;
