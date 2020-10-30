import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBlockText = styled.p`
  height: 30%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  background-color: green;
  border-radius: 0 0 20px 20px;
  text-align: center;
`;

const BlockText = ({ text }) => (
  <StyledBlockText>
    {text}
  </StyledBlockText>
);

BlockText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlockText;
