/* Exercício 1
Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
*/

const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// console.log(rectangles.map((rectangle) => rectangleArea(...rectangle)));

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
});

/* Exercício 2
Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
*/

// const assert = require('assert');

// escreva sum abaixo
const sum = (...arrayNum) => arrayNum.reduce((acc, num) => acc + num, 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));

/* Exercício 3
Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
*/

// const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
// const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
const personLikes = (obj) => {
  const {name, age, likes, ...rest} = obj;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
};

// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');


/* Exercício 4
Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
*/

// const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (array) => {
  return array.filter(({nationality, bornIn}) => nationality === 'Australian' && bornIn > 1900 && bornIn < 2001);
};

const filteredPeople = filterPeople(people);

// console.log(filteredPeople[0]);
// console.log(filteredPeople[1]);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });

/* Exercício 5
Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
*/

// const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([value1, value2, value3]) => [value3, value2, value1];

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

/* Exercício 6
Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
*/

// const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([name, brand, year]) => {
  return {
    name,
    brand,
    year,
  };
};

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });

/* Exercício 7
Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
*/

// const assert = require('assert');

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

const shipLength = ({name, length, measurementUnit}) => {
  return `${name} is ${length} ${measurementUnit} long`;
};

// console.log(shipLength(ships[0]));
// console.log(shipLength(ships[1]));
// console.log(shipLength(ships[2]));

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');

/* Exercício 8
Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
*/

// const assert = require('assert');

// escreva greet abaixo

const greet = (name, greeting = 'Hi') => {
  return `${greeting} ${name}`;
};

// console.log(greet('John'));
// console.log(greet('John', 'Good morning'));
// console.log(greet('Isabela', 'Oi'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');