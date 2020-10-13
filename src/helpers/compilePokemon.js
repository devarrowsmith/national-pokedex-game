import getPokemon from '../services/getPokemon';

const compilePokemon = (dex) => {
  const pokemon = [];
  dex.forEach(async (num) => {
    const pokemonData = await getPokemon(num);
    pokemon.push(pokemonData);
  });
  return pokemon;
};

export default compilePokemon;
