const readline = require('readline-sync');

function index() {
  console.log(`
  1 - IMC
  2 - Velocidade
  3 - Sorteio
  4 - fatorial
  5 - fibonacci
  6 - Sair
  `);
  const selecao = readline.questionInt('Selecione a aplicação desejada: ');
  switch (selecao) {
    case 1: require('./imc');
    break;
    case 2: require('./velocidade');
    break;
    case 3: require('./sorteio');
    break;
    case 4: require('./fatorial');
    break;
    case 5: require('./fibonacci');
    break;
    case 6: console.log("Até a próxima!");
    break;
    default: console.log("Opção inválida. Tente novamente!");
  }
}

index();
