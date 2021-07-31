/*
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****

*/

let n = 5;
let result = "";

for (let line = 0; line < n; line += 1) {
    for (let col = 0; col < n; col += 1) {
        if (col <= line) {
            result += "*";
        }
    }
    console.log(result);
    result = "";
}