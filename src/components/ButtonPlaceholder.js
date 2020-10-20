import React from 'react';
import styled from 'styled-components';

const StyledButtonPlaceholder = styled.button`
  width: 20vw;
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 10px;
  color: maroon;
  font-family: 'Bungee', sans-serif;
  border: none;
  background-color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ButtonPlaceholder = ({ mode }) => (
  <StyledButtonPlaceholder deactivated>
    {mode}
  </StyledButtonPlaceholder>
);

export default ButtonPlaceholder;
