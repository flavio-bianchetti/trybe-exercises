const readline = require("readline-sync");

function velocidade() {
  const distacia = readline.questionInt("Qual a distância percorrida?(metros) ");
  const tempo = readline.questionInt("Qual o tempo gasto?(segundos) ");
  
  console.log(`A velocidade média é: ${(distacia / tempo).toFixed(2)}`);
}

// module.exports = velocidade;
velocidade();
