import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const StyledVictiniBlock = styled(Block)`
background-color: #0c0b12;

p {
  color: #ec8af5;
  background-color: #191926;
}
`;

const VictiniBlock = ({ disabled }) => (
  <StyledVictiniBlock
    text="You Win!"
    sprite="./assets/victini.png"
    disabled={disabled}
  />
);

export default VictiniBlock;
