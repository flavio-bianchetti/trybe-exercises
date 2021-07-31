/*
Agora inverta o lado do triângulo. Por exemplo:

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
        if (col + line >= n - 1 ) {
            result += "*";
        } else {
            result += " ";
        }
    }
    console.log(result);
    result = "";
}