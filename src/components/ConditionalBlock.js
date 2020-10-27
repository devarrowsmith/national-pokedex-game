import React from 'react';
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

export default ConditionalBlock;
