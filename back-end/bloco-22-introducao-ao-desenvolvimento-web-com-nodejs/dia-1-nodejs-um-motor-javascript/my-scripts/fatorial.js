const readline = require('readline-sync');

const fat = (numero) => numero < 2 ? numero : fat(numero - 1) * numero;

function fatorial() {
  const numero = readline.questionInt('Escolha um número: ');

  if (numero > 0) {
    console.log(`O fatorial de ${numero} é ${fat(numero)}`);
  } else {
    console.log('Número inválido');
  }
}

fatorial();
