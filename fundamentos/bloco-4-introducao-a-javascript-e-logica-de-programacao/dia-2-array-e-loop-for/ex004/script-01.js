/*
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1
for (let num of numbers) {
  console.log(num);
}

// exercício 2
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum);

//exercício 3
sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum/numbers.length);

//exercício 4
sum = 0;
for (let num of numbers) {
  sum += num;
}

if ((sum/numbers.length) > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}

//exercício 5
let max = 0;
for (let num of numbers) {
  if ( max < num) {
    max = num;
  }
}
console.log(max);

//exercício 6
let cont = 0;
for (let num of numbers) {
  if (num % 2 > 0) {
    cont += 1;
  }
}

if (cont > 0) {
  console.log(cont);
} else {
  console.log("Nenum valor ímpar encontrado.");
}

// exercício 7
let min = 1000;
for (let num of numbers) {
  if ( min > num) {
    min = num;
  }
}
console.log(min);

//exercício 8
let array = [];
for (let num = 1; num <= 25; num += 1) {
  array.push(num);
  console.log(array[num-1]);
}

//exercício 9
array = [];
for (let num = 1; num <= 25; num += 1) {
  array.push(num);
  console.log(array[num-1]/2);
}
