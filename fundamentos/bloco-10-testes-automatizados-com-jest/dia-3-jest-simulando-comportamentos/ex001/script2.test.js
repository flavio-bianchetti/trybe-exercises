/* Exercício 2
Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

const randomNumber = require('./script1');
jest.mock('./script1');

describe('Utilizando o exercício anterior, crie uma nova implementação...', () => {
  it('deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
    randomNumber.mockImplementation((a, b) => a / b);

    const result = randomNumber(4, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
    expect(result).toBe(2);
  });
});