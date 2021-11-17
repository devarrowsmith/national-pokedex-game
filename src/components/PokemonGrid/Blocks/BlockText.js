import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBlockText = styled.p`
  height: 30%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  color: white;
  background: ${(prop) => (
    prop.className === 'reveal-answer'
      ? 'linear-gradient(180deg, rgba(182,182,182,1) 0%, rgba(78,78,78,1) 13%, rgba(102,102,102,1) 88%, rgba(61,61,61,1) 100%);'
      : 'linear-gradient(180deg, rgba(219,83,83,1) 0%, rgba(196,20,20,1) 10%, rgba(255,0,0,1) 90%, rgba(138,11,11,1) 100%);'
  )};
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const BlockText = ({ text, className }) => (
  <StyledBlockText className={className}>
    {text}
  </StyledBlockText>
);

BlockText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default BlockText;
