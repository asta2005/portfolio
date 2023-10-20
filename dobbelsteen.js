function rolldice() {
  const results = [];
  for (let i = 0; i < 4; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      results.push(roll);
  }
  return results;
}

const dobbelstenenUitkomst = rolldice();
console.log("Resultaat van het rollen van 4 dobbelstenen:", dobbelstenenUitkomst);
