/*
5 - Compare dois objetos para verificar se são idênticos ou não
*/

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.strictEqual(typeof obj1, 'object');
assert.strictEqual(typeof obj2, 'object');
assert.strictEqual(typeof obj3, 'object');

// Comparação obj1 com o obj2
assert.deepStrictEqual(obj1, obj2);

// Comparação obj1 com o obj3
assert.notDeepStrictEqual(obj1, obj3);

// Comparação obj2 com o obj3
assert.notDeepStrictEqual(obj2, obj3);