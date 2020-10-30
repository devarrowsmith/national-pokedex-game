import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const DifficultyButton = ({ mode, numPokemon, setDifficulty }) => (
  <Button
    onClick={() => {
      setDifficulty({
        mode,
        numPokemon,
      });
    }}
  >
    {mode}
  </Button>
);

DifficultyButton.propTypes = {
  mode: PropTypes.string.isRequired,
  numPokemon: PropTypes.number.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

export default DifficultyButton;
