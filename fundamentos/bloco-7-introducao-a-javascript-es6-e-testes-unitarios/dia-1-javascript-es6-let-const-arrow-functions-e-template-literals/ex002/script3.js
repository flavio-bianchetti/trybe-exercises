/*
Exercício 1
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

const fatorial = (num) => {
  let fat = 1;
  if (num > 0) {
    for (let index = num; index > 1; index -= 1) {
      fat *= index;
    }
  }
  return fat;
}

console.log(fatorial(5));

//Bônus
const fatorialRecursive = (num) => num === 1 ? 1 : num * fatorialRecursive(num - 1);

console.log(fatorialRecursive(5));

/*----------------------------------------------------------------
Exercício 2
Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const longestWord = (phrase) => {
  let arrayPhrase = phrase.split(' ');
  let lw = arrayPhrase[0];
  for (let index = 1; index < arrayPhrase.length; index += 1) {
    if (arrayPhrase[index].length > lw.length) {
      lw = arrayPhrase[index];
    }
  }
  return lw;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

