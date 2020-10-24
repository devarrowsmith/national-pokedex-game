import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const StyledDittoBlock = styled(Block)`
background-color: #0c0b12;

p {
  color: #ec8af5;
  background-color: #191926;
}
`;

const DittoBlock = ({ disabled }) => (
  <StyledDittoBlock
    text="try again!"
    sprite="./assets/ditto.png"
    disabled={disabled}
  />
);

export default DittoBlock;
