import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSprite = styled.img`
  height: 70%;
`;

const BlockSprite = ({ sprite, text }) => (
  <StyledSprite
    src={sprite}
    alt={text}
  />
);

BlockSprite.propTypes = {
  sprite: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BlockSprite;
