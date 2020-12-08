import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResetButton from './ResetButton';
import DifficultyButtons from './DifficultyButtons';

const SettingButtonsBar = styled.div`
  width: 100%;
  max-width: 360px;
  height: 40px;
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

SettingButtons.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
  setBusy: PropTypes.func.isRequired,
  setPokemonData: PropTypes.func.isRequired,
  difficulty: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    numPokemon: PropTypes.number.isRequired,
  }).isRequired,
};

export default SettingButtons;
