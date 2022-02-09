const readline = require('readline-sync');


function fib(quantidade) {
  let num1 = 1;
  let num2 = 1;

  for (let index = quantidade; index >= 0; index--) {
    if (num2 > 0) {
      console.log(num2);
    }
    const aux = num1;
    num1 = num1 + num2;
    num2 = aux;
  }

  console.log(num2);
  return num2;
}

function fibonacci() {
  const quantidade = readline.questionInt('Digite a quantidade de números de Fibonacci que serão gerados: ');

  if (quantidade < 1) {
    console.log('Número inválido! Digite um número maior que 0!');
    return;
  }

  console.log(`${quantidade} números de Fibonacci:`);
  fib(quantidade - 2);
}

fibonacci();
