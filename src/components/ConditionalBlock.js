import React from 'react';
import Block from './Block';
import DittoBlock from './DittoBlock';

const ConditionalBlock = ({
  sprite, text, dexNumber, pokemonData, setPokemonData,
}) => (
  <>
    {pokemonData.selected.includes(dexNumber)
      ? (
        <DittoBlock
          disabled
        />
      )
      : (
        <Block
          key={text}
          sprite={sprite}
          text={text}
          dexNumber={dexNumber}
          pokemonData={pokemonData}
          setPokemonData={setPokemonData}
          disabled={false}
        />
      )}
  </>
);

export default ConditionalBlock;
