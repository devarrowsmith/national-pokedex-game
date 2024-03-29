import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from './Block';
import victiniSprite from '../../../assets/victini.png';

const StyledVictiniBlock = styled(Block)`
background-color: rgba(255, 226, 26, 0.8);

p {
  color: #FFFFFF;
  background-color: #7b1100;
}
`;

const VictiniBlock = ({ disabled }) => (
  <StyledVictiniBlock
    text="You Win!"
    sprite={victiniSprite}
    spriteClass="victini"
    disabled={disabled}
  />
);

VictiniBlock.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default VictiniBlock;
