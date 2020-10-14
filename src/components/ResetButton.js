import React from 'react';
import Button from './Button';
import refreshPokemonData from '../helpers/refreshPokemonData';

const ResetButton = ({ setBusy, setPokemonData, difficulty}) => (
  <Button
    onClick={() => refreshPokemonData(setBusy, setPokemonData, difficulty)}
  >
    RESET
  </Button>
);

export default ResetButton;
