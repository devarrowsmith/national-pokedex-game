import React from 'react';
import styled from 'styled-components';
import Block from './Block';

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
    sprite="http://gummicode.github.io/national-pokedex-game/assets/victini.png"
    disabled={disabled}
  />
);

export default VictiniBlock;
