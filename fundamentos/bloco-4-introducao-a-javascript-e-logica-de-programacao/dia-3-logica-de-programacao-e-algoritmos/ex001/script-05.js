/*
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
*/

let n = 7;
let middle = (n + 1) / 2;
let leftSideMatrix = middle;
let rightSideMatrix = middle;
let result = "";

for (let line = 1; line <= middle; line += 1) {
    result = "";
    for (let col = 1; col <= n; col += 1) {
        if (col === leftSideMatrix || col === rightSideMatrix || line === middle ){
            result += "*";
        } else {
            result += " ";
        }
    }
    console.log(result);
    leftSideMatrix -= 1;
    rightSideMatrix += 1;
}
