let randomNumber = require('./script1');

describe('Verifica se a função randomNumber...', () => {
  it('retorna o número 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
});