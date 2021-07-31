/*
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****
*/

let n = 5;
let result = "";

for (let line = 0; line < n; line += 1) {
    for (let col = 0; col < n; col += 1) {
        result += "*";
    }
    console.log(result);
    result = "";
}