/*
2 - Escreva a função wordLengths para passar nos testes já implementados.
*/

const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (words) => {
  let result = [];
  for (let index of words) {
    result.push(index.length);
  }
  return result;
}

////////////////////////////////
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
