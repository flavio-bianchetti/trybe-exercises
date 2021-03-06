/*
4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
    a - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    b - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    c - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    d - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    e - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(typeof myFizzBuzz, 'function');

// Exercício a
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// Exercício b
assert.strictEqual(myFizzBuzz(9), 'fizz');

// Exercício c
assert.strictEqual(myFizzBuzz(10), 'buzz');

// Exercício d
assert.strictEqual(myFizzBuzz(7), 7);

// Exercício e
assert.strictEqual(myFizzBuzz('quinze'), false);