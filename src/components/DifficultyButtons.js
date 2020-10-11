import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const ResetButton = () => (
  <StyledButtonContainer>
    <Button>
      Easy
    </Button>

    <Button>
      Hard
    </Button>

    <Button>
      Ultra
    </Button>
  </StyledButtonContainer>
);

export default ResetButton;
