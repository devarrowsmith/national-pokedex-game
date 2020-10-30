import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import DittoBlock from './DittoBlock';
import VictiniBlock from './VictiniBlock';

const ConditionalBlock = ({
  sprite, text, dexNumber, pokemonData, setPokemonData,
}) => {
  if (pokemonData.win && pokemonData.answer !== dexNumber) {
    return (
      <VictiniBlock
        disabled
      />
    );
  } if (
    pokemonData.selected.includes(dexNumber)
  ) {
    return (
      <DittoBlock
        disabled
      />
    );
  }
  return (
    <Block
      key={text}
      sprite={sprite}
      text={text}
      dexNumber={dexNumber}
      pokemonData={pokemonData}
      setPokemonData={setPokemonData}
      disabled={false}
    />
  );
};

ConditionalBlock.defaultProps = {
  sprite: '',
  dexNumber: 0,
  pokemonData: {},
};

ConditionalBlock.propTypes = {
  sprite: PropTypes.string,
  text: PropTypes.string.isRequired,
  dexNumber: PropTypes.number,
  pokemonData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  setPokemonData: PropTypes.func.isRequired,
};

export default ConditionalBlock;
