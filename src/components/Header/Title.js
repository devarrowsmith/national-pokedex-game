import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  width: 100%;
  max-width: 375px;
  font-size: 1.8em;
  text-align: center;
  line-height: 1.3em;
`;

const Title = () => (
  <>
    <StyledTitle>The National Pokédex Game</StyledTitle>
  </>
);
export default Title;
