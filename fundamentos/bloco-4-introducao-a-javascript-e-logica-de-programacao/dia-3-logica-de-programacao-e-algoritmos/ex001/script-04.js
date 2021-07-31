/*
Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/

let n = 6;
let middleMatrix = (n + 1) / 2;
let leftSideMatrix = middleMatrix;
let rightSideMatrix = middleMatrix;
let result = "";

for (let line = 0; line <= middleMatrix; line += 1) {
    result = "";
    for (let col = 0; col <= n; col += 1) {
        if (col > leftSideMatrix && col < rightSideMatrix){
            result += "*";
        } else {
            result += " ";
        }
    }
    console.log(result);
    leftSideMatrix -= 1;
    rightSideMatrix += 1;
}
