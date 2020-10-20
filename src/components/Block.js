import React from 'react';
import styled from 'styled-components';
import BlockSprite from './BlockSprite';
import BlockText from './BlockText';

const StyledBlock = styled.div`
  height: 130px;
  width: 130px;
  margin: 10px;
  background-color: lightskyblue;
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Block = ({ sprite, text }) => (
  <StyledBlock>
    <BlockSprite
      sprite={sprite}
      text={text}
    />
    <BlockText
      text={text}
    />
  </StyledBlock>
);

export default Block;
