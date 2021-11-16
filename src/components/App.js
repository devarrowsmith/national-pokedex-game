import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Grid from './PokemonGrid/Grid';
import refreshPokemonData from '../helpers/refreshPokemonData';

const GameContainer = styled.div`
min-width: 310px;
`;

const App = () => {
  const [busy, setBusy] = useState(true);

  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    numPokemon: 6,
  });

  const [pokemonData, setPokemonData] = useState({
    answer: null,
    selected: [],
    numSelected: 0,
    pokemon: [],
    win: false,
  });

  useEffect(() => {
    refreshPokemonData(setBusy, setPokemonData, difficulty);
  }, [difficulty]);

  return (
    <GameContainer>
      <Header
        busy={busy}
        answer={pokemonData.answer}
        difficulty={difficulty}
        numSelected={pokemonData.numSelected}
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
export default App;
