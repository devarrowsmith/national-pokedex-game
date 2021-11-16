import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Block from './Block';
import dittoSprite from '../../../assets/ditto.png';

const StyledDittoBlock = styled(Block)`
background-color: rgba(24, 24, 24, 0.5);

p {
  color: #ec8af5;
  background: linear-gradient(180deg, rgba(182,182,182,1) 0%, rgba(78,78,78,1) 13%, rgba(102,102,102,1) 88%, rgba(61,61,61,1) 100%);
}
`;

const DittoBlock = ({ disabled }) => (
  <StyledDittoBlock
    text="try again!"
    sprite={dittoSprite}
    disabled={disabled}
  />
);

DittoBlock.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default DittoBlock;
