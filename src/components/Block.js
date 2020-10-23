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
  background-color: lightskyblue;
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Block = ({ className, sprite, text, dexNumber, pokemonData, setPokemonData }) => (
  <StyledBlock
    className={className}
    onClick={() => checkAnswer(dexNumber, pokemonData, setPokemonData)}
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
