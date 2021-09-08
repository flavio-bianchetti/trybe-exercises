/*
Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvens = (arrayNumbers) => {
  const arrayNum = arrayNumbers.toString();
  for (let index1 = 0; index1 < arrayNumbers.length; index1 += 1) {
    for (let index2 = 1; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index2 - 1] > arrayNumbers[index2]) {
        let auxiliary = arrayNumbers[index2 - 1];
        arrayNumbers[index2 - 1] = arrayNumbers[index2];
        arrayNumbers[index2] = auxiliary;
      }
    }
  }
  console.log(`O array oddsAndEvens [${arrayNum}] ordenado é: [${arrayNumbers}].`);
}

oddsAndEvens([13, 3, 4, 10, 7, 2]); // será necessário alterar essa linha 😉

const oddsAndEvens2 = (arrayNumbers) => `O array oddsAndEvens ordenado é ${arrayNumbers.sort((a,b) => a - b)}.`;

console.log(oddsAndEvens2([13, 3, 4, 10, 7, 2])); // será necessário alterar essa linha 😉