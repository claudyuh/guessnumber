const hintCalcultator = (
  randomNr: number,
  currentNr: number,
  prevNr: number | undefined,
  lastHint: string | undefined
) => {
  let currDiff: number = Math.abs(randomNr - currentNr);
  const prevDiff = prevNr ? Math.abs(randomNr - prevNr) : false;
  if (currDiff >= 50) {
    if ((lastHint === "Cold" || lastHint === "Colder") && prevDiff < currDiff) {
      return "Colder";
    }
    return "Cold";
  } else if (25 < currDiff && currDiff < 49) {
    if ((lastHint === "Warm" || lastHint === "Warmer") && prevDiff > currDiff) {
      return "Warmer";
    }
    return "Warm";
  } else {
    if ((lastHint === "Hot" || lastHint === "Hoter") && prevDiff > currDiff) {
      return "Hoter";
    }
    return "Hot";
  }
};

export default hintCalcultator;
