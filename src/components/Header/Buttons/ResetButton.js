import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import refreshPokemonData from '../../../helpers/refreshPokemonData';

const ResetButton = ({ setBusy, setPokemonData, difficulty }) => (
  <Button
    onClick={() => refreshPokemonData(setBusy, setPokemonData, difficulty)}
  >
    RESET
  </Button>
);

ResetButton.propTypes = {
  setBusy: PropTypes.func.isRequired,
  setPokemonData: PropTypes.func.isRequired,
  difficulty: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    numPokemon: PropTypes.number.isRequired,
  }).isRequired,
};

export default ResetButton;
