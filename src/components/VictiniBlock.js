import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from './Block';
import refreshPokemonData from '../helpers/refreshPokemonData';

const StyledVictiniBlock = styled(Block)`
background-color: #F5BB13;

p {
  color: #FFFFFF;
  background-color: #7b1100;
}
`;

const VictiniBlock = ({ disabled }) => (
  <StyledVictiniBlock
    text="You Win!"
    sprite="http://devarrowsmith.github.io/national-pokedex-game/assets/victini.png"
    spriteClass='victini'
    disabled={disabled}
  />
);

VictiniBlock.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default VictiniBlock;
