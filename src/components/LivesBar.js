import React from 'react';
import styled from 'styled-components';

const StyledLivesBar = styled.div`
    width: 100%;
    max-width: 240px;
    height: 40px;
    padding: 5px 0;
    border-radius: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    @media (min-height: 600px) {
    padding: 10px 0;
  }

    p {
        color: white;
        font-family: 'Bungee', sans-serif;
        font-size: 1.2em;
        padding: 0 5px 15px 5px;
    }

    div {
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background-color: yellow;
        margin: 0 5px 15px 5px;
    }

    .grey-pip {
          background-color: #202020;
        }
`;

const LivesBar = ({ numSelected }) => {
  return (
    <StyledLivesBar>
      <p>LIVES:</p>
      <div className={numSelected > 0 ? 'grey-pip' : null} />
      <div className={numSelected > 1 ? 'grey-pip' : null} />
      <div className={numSelected > 2 ? 'grey-pip' : null} />
    </StyledLivesBar>
  );
};

export default LivesBar;
