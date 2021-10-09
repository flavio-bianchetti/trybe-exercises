/*
Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

*/

const getUserName = require('./script2');

describe('verifique a função getUserName', () => {
  it('verifique se o usuário Mark é encontrado e retorne o seu nome', async () => {
    const result = await getUserName(1);
    expect(result).toEqual('Mark');
  });

  it('verifique se o usuário não existe e retorne um erro.', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with 3 not found.');
    }
  });
});
