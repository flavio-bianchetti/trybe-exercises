/*
1 - Escreva a função addOne para passar nos testes já implementados.
*/

const assert = require('assert');
// escreva a função addOne aqui

const addOne = (myArray) => {
  let array = [];
  for (let index = 0; index < myArray.length; index += 1) {
    array.push(myArray[index] + 1);
  }
  return array;
}

////////////////////////////////
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
