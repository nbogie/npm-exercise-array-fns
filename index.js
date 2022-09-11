function collect(numElems, creatorFn) {
  const results = [];
  for (let i = 0; i < numElems; i++) {
    const elem = creatorFn(i);
    results.push(elem);
  }
  return results;
}
function repeat(numReps, callbackFn) {
  for (let i = 0; i < numReps; i++) {
    callbackFn(i);
  }
}

module.exports = { collect, repeat };
