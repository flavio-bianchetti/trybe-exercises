/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let piece = "ROOKS";

switch (piece.toLowerCase()) {
  case "pawn":
    console.log("The pawn move forward one or two squares and atacks the square diagonally.");
    break;
  case "rooks":
    console.log("The rooks moves like a '+' sing.");
    break;
  case "knight":
    console.log("The knight moves in an 'L' shape.");
    break;
  case "bishop":
    console.log("The bishop moves in an 'X' pattern.");
    break;
  case "queen":
    console.log("The queen moves like a rook and bishop combined.");
    break;
  case "king":
    console.log("The king can move to the highlighted squares.");
    break;
  default:
    console.log("[ERROR] Invalid chess piece.");
}