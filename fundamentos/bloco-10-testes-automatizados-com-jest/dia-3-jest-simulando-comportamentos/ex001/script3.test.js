/* Exercício 3
Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
*/

const randomNumber = require('./script1');

const obj = {
  myRandomNumber: randomNumber,
};

describe('Com a mesma implementação do primeiro exercício,', () => {
  describe('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.', () => {
    it('Multiplicação de 3 parâmetros', () => {
      const mockMultiplier = jest.spyOn(obj, 'myRandomNumber')
        .mockImplementation((a, b, c) => a * b * c);

      obj.myRandomNumber(2, 3, 4);

      expect(mockMultiplier).toHaveBeenCalled();
      expect(mockMultiplier).toHaveBeenCalledTimes(1);
      expect(mockMultiplier).toHaveBeenCalledWith(2, 3, 4);
      expect(mockMultiplier(2, 3, 4)).toBe(24);
    });
  });

  describe('Depois resete sua implementação e crie uma nova que receba um parâmetro e retorne seu dobro.', () => {
    it('Dobro do numero', () => {
        obj.myRandomNumber.mockRestore();
        const mockDouble = jest.spyOn(obj, 'myRandomNumber')
            .mockImplementation((a) => a * 2);

      obj.myRandomNumber(5);

      expect(mockDouble).toHaveBeenCalled();
      expect(mockDouble).toHaveBeenCalledTimes(1);
      expect(mockDouble).toHaveBeenCalledWith(5);
      expect(mockDouble(5)).toBe(10);
    });
  });
});