import React from 'react';
import styled from 'styled-components';
import fadeIn from '../styles/fadeIn';

const StyledLoading = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.8em;
  line-height: 1.4em;
  text-align: center;
  animation: ${fadeIn} 2s;

  span {
    color: #FFFF33;
  }
`;

const Loading = () => (
  <StyledLoading>
    Loading...
  </StyledLoading>
);
export default Loading;
