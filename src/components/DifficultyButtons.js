import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ButtonPlaceholder from './ButtonPlaceholder';
import difficulties from '../helpers/difficulties';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const DifficultyButtons = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <StyledButtonContainer>
    {
    difficulties.map((setting) => (
      setting.mode === difficulty.mode
        ? (
          <ButtonPlaceholder
            mode={setting.mode}
          >
            {setting.mode}
          </ButtonPlaceholder>
        ) : (
          <Button
            onClick={() => {
              setDifficulty({
                mode: setting.mode,
                numPokemon: setting.numPokemon,
              });
            }}
          >
            {setting.mode}
          </Button>
        )))
}
  </StyledButtonContainer>
);

export default DifficultyButtons;
