const dexGenerator = (blocks) => {
  const randomDex = () => Math.floor(Math.random() * 10) + 1;
  const createDex = () => {
    const dex = [];
    while (dex.length < blocks) {
      const newDex = randomDex();
      if (dex.indexOf(newDex) === -1) {
        dex.push(newDex);
      }
    }
    console.log(dex);
    return dex;
  };
  createDex();
};

export default dexGenerator;
