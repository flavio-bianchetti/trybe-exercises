const obj = require('./script4');
jest.mock('./script4')

describe('Faça o mock do arquivo.', () => {
  it('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.', () => {
    obj.uppercaseString.mockImplementation((string) => string.toLowerCase());

    obj.uppercaseString('FlAvIo');

    expect(obj.uppercaseString).toHaveBeenCalled();
    expect(obj.uppercaseString).toHaveBeenCalledTimes(1);
    expect(obj.uppercaseString).toHaveBeenCalledWith('FlAvIo');
    expect(obj.uppercaseString('XABLAU')).toBe('xablau');
});
  it('Para a segunda função, uma nova implementação deve retornar a última letra de uma string. ', () => {
    obj.firstCharacter.mockImplementation((string) => string[string.length - 1]);

    obj.firstCharacter('FlAvIo');

    expect(obj.firstCharacter).toHaveBeenCalled();
    expect(obj.firstCharacter).toHaveBeenCalledTimes(1);
    expect(obj.firstCharacter).toHaveBeenCalledWith('FlAvIo');
    expect(obj.firstCharacter('XABLAU')).toBe('U');
});
it('A terceira deve receber três strings e concatená-las.', () => {
    obj.concatStrings.mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

    obj.concatStrings('Monkey', 'D.', 'Luffy');

    expect(obj.concatStrings).toHaveBeenCalled();
    expect(obj.concatStrings).toHaveBeenCalledTimes(1);
    expect(obj.concatStrings).toHaveBeenCalledWith('Monkey', 'D.', 'Luffy');
    expect(obj.concatStrings('Gold', 'D.', 'Roger')).toBe('Gold D. Roger');
});
});