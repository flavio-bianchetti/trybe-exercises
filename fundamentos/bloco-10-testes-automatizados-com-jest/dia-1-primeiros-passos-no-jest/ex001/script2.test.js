/*
2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    a - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    b - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    c - Verifique se o array passado por parâmetro não sofreu alterações
    d - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const myRemove = require('./script2');



describe('Testa a função myRemove()', () => {
  const myArray = [1, 2, 3, 4];
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove(myArray, 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myArray).toEqual([1, 2, 3, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove(myArray, 5)).toEqual([1, 2, 3, 4]);
  });
});