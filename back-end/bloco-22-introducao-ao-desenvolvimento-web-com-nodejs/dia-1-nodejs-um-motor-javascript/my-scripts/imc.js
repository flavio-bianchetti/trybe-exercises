const readline = require("readline-sync");

function imc() {
  const height = readline.questionFloat("Qual sua altura? ");
  const weight = readline.questionFloat("Qual seu peso? ");

  const imcValue = (weight / (Math.pow(height, 2))).toFixed(2);

//   console.log(`Altura: ${height} - Peso: ${weight}`);
console.log(`Seu índice de massa corporal é ${imcValue}`);

  switch(true) {
    case imcValue < 18.5: console.log("Abaixo do peso");
    break;
    case imcValue >= 18.5 && imcValue < 25: console.log("Peso normal");
    break;
    case imcValue >= 25 && imcValue < 30: console.log("Sobrepeso");
    break;
    case imcValue >= 30 && imcValue < 35: console.log("Obesidade grau I");
    break;
    case imcValue >= 35 && imcValue < 40: console.log("Obesidade grau II");
    break;
    case imcValue >= 40: console.log("Obesidade grau III e IV");
    break;
    default: console.log("Valor inválido");
  }
}

// module.exports = imc;
imc();
