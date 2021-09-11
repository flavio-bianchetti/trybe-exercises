/*
1 - Dada uma matriz, transforme em um array.
*/

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

// console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

/*
Exercícios 2, 3 e 4
*/

// const assert = require('assert');

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

/* Exercício 2 
Crie uma string com os nomes de todas as pessoas autoras.
*/

let expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";


const getNameAuthor = (acc, current, index, array) => {
  if (index + 1 === array.length) {
    return `${acc}${array[index].author.name}.`;
  } 
  return `${acc}${array[index].author.name}, `;
};

function reduceNames() {
  // escreva seu código aqui
  let result = books.reduce(getNameAuthor, '');
  return result;
}

// console.log(reduceNames());

assert.strictEqual(reduceNames(), expectedResult);

/* Exercício 3
Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
*/

expectedResult = 43;

const average = (acc, book, index, books) => {
  acc += (book.releaseYear - book.author.birthYear);

  if (index + 1 === books.length) return acc / books.length;

  return acc;
};


function averageAge() {
  // escreva seu código aqui
    return books.reduce(average, 0);
}

// console.log(averageAge());

assert.strictEqual(averageAge(), expectedResult);

/* Exercício 4
Encontre o livro com o maior nome.
*/


expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const nameOfBook = (acc, book, index, books) => {
  if (acc.name.length < book.name.length) {
    acc = book;
  }
  return acc;
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce(nameOfBook, {name: ''});
}

// console.log(longestNamedBook());

assert.deepStrictEqual(longestNamedBook(), expectedResult);

/* Exercício 5
Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
*/

// const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countCharA = (acc, name) => {
  acc += name.split('').reduce((acc, char) => char === 'a' || char === 'A' ? acc + 1 : acc , 0);
  return acc;
};

function containsA() {
  // escreva seu código aqui
  return names.reduce(countCharA, 0);
}

// console.log(containsA());

assert.deepStrictEqual(containsA(), 20);

/* Exercício 6
6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .
*/

// const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const averageGrades = (acc, value, index, grade) => {
  acc += value;

  if (index + 1 === grade.length) return acc / grade.length;
  
  return acc;
};

function studentAverage() {
  // escreva seu código aqui
  const result = students.map((name, index) => ({name: name, average: grades[index].reduce(averageGrades, 0)}));
  return result;
}

// console.log(studentAverage());

expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
