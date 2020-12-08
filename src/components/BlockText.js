import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBlockText = styled.p`
  height: 30%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  color: ${(prop) => (prop.className === 'reveal-answer' ? 'black' : 'white')};
  background-color: ${(prop) => (prop.className === 'reveal-answer' ? '#969A97' : 'green')};
  border-radius: 0 0 20px 20px;
  text-align: center;
`;

const BlockText = ({ text, className }) => (
  <StyledBlockText className={className}>
    {text}
  </StyledBlockText>
);

BlockText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlockText;
