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
    (pokemonData.selected.includes(dexNumber) || pokemonData.numSelected > 2)
    && pokemonData.answer !== dexNumber
  ) {
    return (
      <DittoBlock
        disabled
      />
    );
  }
  if (
    pokemonData.numSelected > 2 && pokemonData.answer === dexNumber) {
    return (
      <Block
        key={text}
        sprite={sprite}
        text={text}
        dexNumber={dexNumber}
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        disabled={true}
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
  ]).isRequired,
  setPokemonData: PropTypes.func.isRequired,
};

export default ConditionalBlock;
