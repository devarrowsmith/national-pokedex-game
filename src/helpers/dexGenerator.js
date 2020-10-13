const dexGenerator = (blocks) => {
  const randomDex = () => Math.floor(Math.random() * 893) + 1;
  const createDex = () => {
    const dex = [];
    while (dex.length < blocks) {
      const newDex = randomDex();
      if (dex.indexOf(newDex) === -1) {
        dex.push(newDex);
      }
    }
    return dex;
  };
  return createDex();
};

export default dexGenerator;
