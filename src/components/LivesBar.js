import React from 'react';
import styled from 'styled-components';

const StyledLivesBar = styled.div`
    width: 100%;
    max-width: 360px;
    height: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items center;

    p {
        color: white;
        font-family: 'Bungee', sans-serif;
        padding: 0 5px 15px 5px;
    }

    div {
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background-color: yellow;
        margin: 0 5px 15px 5px;
    }
`;

const LivesBar = () => (
    <StyledLivesBar>
        <p>LIVES:</p>
        <div />
        <div />
        <div />
    </StyledLivesBar>
);

export default LivesBar;
