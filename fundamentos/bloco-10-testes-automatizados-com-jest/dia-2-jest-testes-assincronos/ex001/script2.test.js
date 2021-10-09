/*
Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
*/

const getUserName = require('./script2');

describe('verifique a função getUserName', () => {
  it('verifique se o usuário Mark é encontrado e retorne o seu nome', () => {
    getUserName(1).then((name) => expect(name).toEqual('Mark'));
  });

  it('verifique se o usuário não existe e retorne um erro.', () => {
    expect.assertions(1);
    getUserName(3).catch((error) => expect(error.message).toMatch('User with 3 not found.'));
  });
});
