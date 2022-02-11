const { expect } = require('chai');

const numberDetails = require('../index');

describe('Quando o número for maior que 0', () => {
  it('retorna "positivo".', () => {
    const result = numberDetails(1);
    expect(result).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que 0', () => {
    it('retorna "negativo".', () => {
    const result = numberDetails(-1);
    expect(result).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a 0', () => {
    it('retorna "neutro".', () => {

    const result = numberDetails(0);
    expect(result).to.be.equals('neutro');
  });
});

describe('Quando não for um número', () => {
    it('retorna "o valor deve ser um número".', () => {

    const result = numberDetails('a');
    expect(result).to.be.equals('o valor deve ser um número');
  });
});

const writeMyFile = require('../writeMyFile')
const file_name = '../my_file.txt';
const content = 'Hello World!';

const fs = require('fs');
const sinon = require('sinon');

describe('Recebe o nome do arquivo e o conteúdo, adicionando o conteúdo no arquivo', () => {

  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('verifica se o resultado é uma "string" e se retorna "ok", indicando que o processo ocorreu com sucesso.', async () => {
    const result = await writeMyFile(file_name, content);
    expect(result).to.be.a('string');
    expect(result).to.be.equals('ok');
  });
});
