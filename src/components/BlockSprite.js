import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSprite = styled.img`
  height: 70%;
  background-color: ${(prop) => (prop.className === 'victini' ? 'purple' : 'transparent')};

`;

const BlockSprite = ({ sprite, text, spriteClass }) => {
  console.log(spriteClass);
  return(
  <StyledSprite
    src={sprite}
    alt={text}
    className={spriteClass}
  />
)};

BlockSprite.propTypes = {
  sprite: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BlockSprite;
