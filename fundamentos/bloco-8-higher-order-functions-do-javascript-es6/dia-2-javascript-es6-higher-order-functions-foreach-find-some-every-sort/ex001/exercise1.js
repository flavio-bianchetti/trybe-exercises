const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/* Exercício 1
Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
*/

const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947 ? book.author.name : 0);
};

// console.log(authorBornIn1947());

/*
2 -  Retorne o nome do livro de menor nome.
 */ 

const smallerName = () => {
  let nameBook = 'As Crônicas de Gelo e Fogo';
  // escreva aqui o seu código

  books.forEach((book) => book.name.length < nameBook.length ? nameBook = book.name : 0);

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName());

assert.strictEqual(smallerName(), 'Duna');

/*
3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
*/

let expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((book) => book.name.length === 26);
}

// console.log(getNamedBook());

assert.deepStrictEqual(getNamedBook(), expectedResult);

/*
4 - Ordene os livros por data de lançamento em ordem decrescente.
*/

expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

// console.log(booksOrderedByReleaseYearDesc());

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

/*
5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
*/

expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  let yearStart = 1900;
  let yearEnd = 1999;
  return books.every((book) => book.author.birthYear >= yearStart && book.author.birthYear <= yearEnd);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

/*
6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
*/

expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
let yearStart = 1980;
let yearEnd = 1989;
  return books.some((book) => book.releaseYear >= yearStart && book.releaseYear <= yearEnd);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

/* 
7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
*/

expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.some((book) => (book.author.birthYear === book.author.birthYear && book.author.name !== book.author.name));
}

// console.log(authorUnique());

assert.strictEqual(authorUnique(), expectedResult);
