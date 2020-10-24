import React from 'react';
import styled from 'styled-components';
import BlockSprite from './BlockSprite';
import BlockText from './BlockText';
import checkAnswer from '../helpers/checkAnswer'

const StyledBlock = styled.button`
  all: unset;
  height: 130px;
  width: 130px;
  margin: 10px;
  cursor: pointer;
  background-color: lightskyblue;
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Block = ({ className, sprite, text, dexNumber, pokemonData, setPokemonData, disabled }) => (
  <StyledBlock
    className={className}
    onClick={() => checkAnswer(dexNumber, pokemonData, setPokemonData)}
    disabled={disabled}
  >
    <BlockSprite
      sprite={sprite}
      text={text}
    />
    <BlockText
      text={text}
    />
  </StyledBlock>
);

export default Block;
