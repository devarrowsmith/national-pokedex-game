import React from 'react';
import styled from 'styled-components';
import ResetButton from './ResetButton';
import DifficultyButtons from './DifficultyButtons';

const SettingButtonsBar = styled.div`
  width: 100%;
  height: 6vh;
  padding: 15px 0;
  display: flex; 
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const SettingButtons = ({
  setDifficulty, setBusy, setPokemonData, difficulty,
}) => (
  <SettingButtonsBar>
    <ResetButton
      setBusy={setBusy}
      setPokemonData={setPokemonData}
      difficulty={difficulty}
    />
    <DifficultyButtons
      setDifficulty={setDifficulty}
      setBusy={setBusy}
      setPokemonData={setPokemonData}
      difficulty={difficulty}
    />
  </SettingButtonsBar>
);

export default SettingButtons;
