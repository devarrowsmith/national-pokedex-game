const checkAnswer = (dexNumber, pokemonData, setPokemonData) => (dexNumber === pokemonData.answer
  ? (setPokemonData((previousState) => ({
    ...previousState,
    win: true,
  })))
  : (setPokemonData((previousState) => ({
    ...previousState,
    selected: [...previousState.selected, dexNumber],
    numSelected: (() => previousState.numSelected + 1)(),
  }))));

export default checkAnswer;
