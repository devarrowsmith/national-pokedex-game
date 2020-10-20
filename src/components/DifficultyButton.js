import React from 'react';
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

export default DifficultyButton;
