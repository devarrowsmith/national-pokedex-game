import React from 'react';
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

export default BlockSprite;
