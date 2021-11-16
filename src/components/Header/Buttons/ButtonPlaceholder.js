import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonPlaceholder = styled.button`
  width: 70px;
  height: 40px;
  margin: 0 5px;
  padding: 0 10px;
  color: #141414;
  font-family: 'Bungee', sans-serif;
  background: linear-gradient(180deg, rgba(255,248,210,1) 0%, rgba(255,201,1,1) 13%, rgba(255,210,1,1) 90%, rgba(125,117,0,1) 100%);
  border: 2px solid #23211A;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonPlaceholder = ({ mode }) => (
  <StyledButtonPlaceholder deactivated>
    {mode}
  </StyledButtonPlaceholder>
);

ButtonPlaceholder.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default ButtonPlaceholder;
