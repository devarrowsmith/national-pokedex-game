import pokemonGenerator from './pokemonGenerator';

const refreshPokemonData = ( setBusy, setPokemonData, difficulty ) => {
  setBusy(true);
  pokemonGenerator(difficulty.numPokemon)
    .then((data) => setPokemonData({
      ...data,
    }));
  setBusy(false);
};

export default refreshPokemonData;
