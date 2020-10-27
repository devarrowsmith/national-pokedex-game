import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Grid from './Grid';
import refreshPokemonData from '../helpers/refreshPokemonData';

const Game = () => {
  const [busy, setBusy] = useState(true);

  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    numPokemon: 6,
  });

  const [pokemonData, setPokemonData] = useState({
    answer: null,
    selected: [],
    pokemon: [],
    win: false,
  });

  useEffect(() => {
    refreshPokemonData(setBusy, setPokemonData, difficulty);
  }, [difficulty]);

  const GameContainer = styled.div`
    min-width: 310px;
  `;

  return (
    <GameContainer>
      <Header
        busy={busy}
        answer={pokemonData.answer}
        difficulty={difficulty}
        win={pokemonData.win}
        setDifficulty={setDifficulty}
        setBusy={setBusy}
        setPokemonData={setPokemonData}
      />
      <Grid
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />
    </GameContainer>
  );
};
export default Game;
