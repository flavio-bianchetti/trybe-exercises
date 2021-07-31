/*
Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

let number = 11;
let howManyDivisions= 0;

if (number > 1) {
    for (let count = 1; count <= number; count += 1) {
        if (number % count === 0){
            howManyDivisions += 1;
        }
    }
} else {
    // The number must be greater than or equal of 2 to be a prime number.
    console.log("O número deve ser maior ou igual a 2 para ser um número primo.");
}

if (howManyDivisions === 2){
    // The number ${number} is a prime number!
    console.log(`O número ${number} é um número primo!`);
} else {
    // The number ${number} is not a prime number!
    console.log(`O número ${number} não é um número primo!`);
}