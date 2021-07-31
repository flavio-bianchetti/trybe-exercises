/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let note = 91;

switch (true) {
  case (note > 100 || nota < 0): //O número não está dentro do intervalo (0 e 100)!
    console.log("[ERROR] The number is not within the range 0 to 100!");
    break;
  case (note < 50):
    console.log("F");
    break;
  case (note < 60):
    console.log("E");
    break;
  case (note < 70):
    console.log("D");
    break;
  case (note < 80):
    console.log("C");
    break;
  case (note < 90):
    console.log("B");
    break;
  default:
    console.log("A");
}