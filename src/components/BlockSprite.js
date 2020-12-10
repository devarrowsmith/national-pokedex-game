import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSprite = styled.img`
  height: 70%;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
  animation-name: ${(prop) => (prop.className === 'victini' ? 'bounce' : 'none')};
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  @keyframes bounce {
    0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-20px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-2px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    };
`;

const BlockSprite = ({ sprite, text, spriteClass }) => {
  return (
    <StyledSprite
      src={sprite}
      alt={text}
      className={spriteClass}
    />
  );
};

BlockSprite.defaultProps = {
  spriteClass: '',
};

BlockSprite.propTypes = {
  sprite: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  spriteClass: PropTypes.string,
};

export default BlockSprite;
