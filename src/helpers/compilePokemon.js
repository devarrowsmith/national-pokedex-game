import getPokemon from '../services/getPokemon';

const compilePokemon = (dex) => Promise.all(dex.map((num) => getPokemon(num)));

export default compilePokemon;
