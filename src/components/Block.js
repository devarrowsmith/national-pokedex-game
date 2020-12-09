import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockSprite from './BlockSprite';
import BlockText from './BlockText';
import checkAnswer from '../helpers/checkAnswer';

const StyledBlock = styled.button`
  all: unset;
  height: 130px;
  width: 130px;
  margin: 10px;
  cursor: pointer;
  background-color: ${(prop) => (prop.className === 'reveal-answer' ? '#D6D1CD' : 'lightskyblue')};
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-height: 600px) {
    margin: 20px 10px;
  }
`;

const Block = ({
  className, spriteClass, sprite, text, dexNumber, pokemonData, setPokemonData, win, disabled,
}) => (

  <StyledBlock
    className={className}
    onClick={() => checkAnswer(dexNumber, pokemonData, setPokemonData)}
    disabled={disabled}
  >
    <BlockSprite
      sprite={sprite}
      spriteClass={spriteClass}
      text={text}
    />
    <BlockText
      className={className}
      text={text}
    />
  </StyledBlock>
);

Block.defaultProps = {
  className: '',
  dexNumber: 0,
};

Block.propTypes = {
  className: PropTypes.string,
  sprite: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dexNumber: PropTypes.number,
  pokemonData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  setPokemonData: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Block;
