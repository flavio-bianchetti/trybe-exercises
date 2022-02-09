const readline = require("readline-sync");

function sorteio() {
  const numero = readline.questionInt("Escolha um número: ");
  const numeroEscolhido = Math.floor(Math.random() * 11);
  if (numero === numeroEscolhido) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Ôpa, não foi desta vez. O número era ${numeroEscolhido}`);
  }
}

// module.exports = sorteio;

sorteio();