/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/

const angule1 = 30;
const angule2 = 100;
const angule3 = 50;
let sum = angule1 + angule2 + angule3;

if (angule1 > 0 && angule2 > 0 && angule3 > 0){
  if (sum == 180) {
    console.log("true");
  } else {
    console.log("false");
  }
} else {
  console.log("[ERROR] invalid value(s)!");
}