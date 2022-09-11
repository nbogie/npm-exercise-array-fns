/**
 * A creator function.  Used to create something!
 *
 * @callback creatorCallback
 * @param {number} index a numeric index to help the callback return different things per call, deterministically
 * @return {any} - should return something, to be useful!
 */

/**
 * Create an array populated by the results of a given number of calls to a given creator function.
 *
 * @param {number} numElems number of elements to populate the array with.
 * @param {creatorCallback} creatorCallback a function to call
 */
function collect(numElems, creatorCallback) {
  const results = [];
  for (let i = 0; i < numElems; i++) {
    const elem = creatorCallback(i);
    results.push(elem);
  }
  return results;
}

/**
 * An action callback function - used for its side-effects.
 *
 * @callback actionCallback
 * @param {number} index a numeric index to help the callback do different things per call, deterministically
 * @return {void} - should not return anything - will be ignored.
 */

/**
 * Repeatedly perform a given action, a given number of times, for its side effects.  The callback's return values will be ignored (and should always be undefined)
 *
 * @param {number} numReps number of repetitions
 * @param {actionCallback} callbackFn will be called numReps times, and each time passed an argument from 0 to numReps-1
 * @returns {void} returns nothing.  The return values from the actionCallback are ignored.
 */
function repeat(numReps, callbackFn) {
  for (let i = 0; i < numReps; i++) {
    callbackFn(i);
  }
}

module.exports = { collect, repeat };
