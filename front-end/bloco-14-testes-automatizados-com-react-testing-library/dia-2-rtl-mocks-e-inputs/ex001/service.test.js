let { randomNumber, upperCase, firstChar, concatStrings, dogPictures } = require('./service');

test('Utilize o mock e defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  randomNumber = jest.fn().mockReturnValue(10);

  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

test('Defina o mock da função para a nova funcionalidade da função. Teste se a função foi chamada e a nova implementação de divisão foi aplicada. Verifique se a aplicação da nova implementação acontece apenas uma vez.', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(10, 2);
});

test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros. Retorne a multiplicação dos parâmetros. Realize os testes que achar necessário. Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro. Faça os testes que achar necessário.', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c );

  expect(randomNumber(2, 6, 5)).toBe(60);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  randomNumber.mockReset();

  randomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(randomNumber(7)).toBe(14);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(7);
});

describe('Teste as três funções.', () => {
  test('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa. Após criar os testes, restaure a implementação da primeira função.', () => {

    upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
  
    expect(upperCase('ViTóRiA')).toBe('vitória');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('ViTóRiA');

    upperCase.mockRestore();

    expect(upperCase('ViTóRiA')).toBe('VITÓRIA');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith('ViTóRiA');
  });
  
  test('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
    firstChar = jest.fn().mockImplementation((string) => {
      const last = string.length - 1;
      return string[last];
    });
  
    expect(firstChar('ViTóRiA')).toBe('A');
    expect(firstChar).toHaveBeenCalled();
    expect(firstChar).toHaveBeenCalledTimes(1);
    expect(firstChar).toHaveBeenCalledWith('ViTóRiA');
  });
  
  test('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
    concatStrings = jest.fn().mockImplementation((string1, string2, string3) => `${string1}${string2}${string3}`);
  
    expect(concatStrings('Vi','Tó','RiA')).toBe('ViTóRiA');
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledWith('Vi','Tó','RiA');
  });
});

describe('Mocke a requisição e crie dois testes.', () => {
  dogPictures = jest.fn();
  afterEach(dogPictures.mockReset);

  test('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".', async () => {
    dogPictures.mockResolvedValue('request sucess');

    dogPictures();
    expect(dogPictures).toHaveBeenCalled();
    expect(dogPictures).toHaveBeenCalledTimes(1);
    await expect(dogPictures()).resolves.toBe('request sucess');
    expect(dogPictures).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    dogPictures.mockRejectedValue('request failed');

    expect(dogPictures).toHaveBeenCalledTimes(0);
    await expect(dogPictures()).rejects.toMatch('request failed');
    expect(dogPictures).toHaveBeenCalledTimes(1);
  });
});

