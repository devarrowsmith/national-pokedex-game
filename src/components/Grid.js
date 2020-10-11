import React from 'react';
import styled from 'styled-components';
import Block from './Block';

const StyledGrid = styled.div`
  width: 100%;
  background-color: darkslategrey;
  min-height: 300px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const Grid = () => (
  <StyledGrid>
    <Block />
  </StyledGrid>
);

export default Grid;
