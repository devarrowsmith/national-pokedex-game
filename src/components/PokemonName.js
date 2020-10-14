import React from 'react';
import styled from 'styled-components';

const StyledName = styled.p`
  height: 30%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: green;
  border-radius: 0 0 20px 20px;
  text-align: center;
`;

const PokemonSprite = ({ name }) => (
  <StyledName>
    {name}
  </StyledName>
);

export default PokemonSprite;
