/*
Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
*/

const uppercase = require('./script1');

describe('Verifica a chamada do callback de uppercase', () => {
  it('Verifica se a entrada "flavio" é retornada com letras maiúsculas', (done) => {
    uppercase('flavio', (word) => {
      try {
        expect(word).toBe('FLAVIO');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
