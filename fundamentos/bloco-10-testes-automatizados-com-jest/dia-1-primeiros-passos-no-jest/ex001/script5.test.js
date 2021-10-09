/*
5 - Compare dois objetos para verificar se são idênticos ou não
*/

const { obj1, obj2, obj3 } = require('./script5');

describe('Comparar se os objetos são idênticos ou não', () => {
  test('Comparar obj1 com obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  test('Comparar obj1 com obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  test('Comparar obj2 com obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
