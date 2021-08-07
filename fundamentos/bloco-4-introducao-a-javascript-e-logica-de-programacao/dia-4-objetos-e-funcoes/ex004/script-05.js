/*
5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
        Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
        Valor esperado no retorno da função: 2 .
*/

function countOccurrences(arrayNumbers) {
  let result;
  if (arrayNumbers.length > 0) {
    arrayNumbers = arrayNumbers.sort();
    let occurrences = [1];
    let numbersArray = [arrayNumbers[0]]; 
    let numberCurrent = arrayNumbers[0];
    
    for (let index = 1; index < arrayNumbers.length; index += 1) {
      if (arrayNumbers[index] === numberCurrent) {
        occurrences[numbersArray.length - 1] += 1;
      } else {
        numbersArray.push(arrayNumbers[index]);
        occurrences[numbersArray.length - 1] = 1;
        numberCurrent = arrayNumbers[index];
      }
    }

    result = numbersArray[(occurrences.indexOf(occurrences.reduce(function(a, b){
        return Math.max(a, b);
    })))];

  }
  return result;
}

console.log(countOccurrences([2, 3, 2, 5, 8, 2, 3]));

