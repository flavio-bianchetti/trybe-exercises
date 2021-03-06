/*
1 - A função sum(a, b) retorna a soma do parâmetro a com o b
    a) Teste se o retorno de sum(4, 5) é 9
    b) Teste se o retorno de sum(0, 0) é 0
    c) Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
    d) Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

*/

const sum = require('./script1');


describe('Testa a função sum', () => {
// Exercício a
test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  // Exercício b
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  // Exercício c
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {sum(4, "5")}).toThrow();
  });
  
  // Exercício d
  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'));
  });
});