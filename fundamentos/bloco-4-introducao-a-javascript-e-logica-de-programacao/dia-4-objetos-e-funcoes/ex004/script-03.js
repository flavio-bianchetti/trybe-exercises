/*
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
        Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
        Valor esperado no retorno da função: 6 .
*/

/*
Array.reduce() pode ser usada para encontrar o menor elemento em um vetor numérico, comparando cada valor:
let indiceMaxValue = array.indexOf(array.reduce(function(a, b){ 
                                                    return Math.min(a, b);
                                                }));
*/


function returnMinValue(array) {
  let minNumber = array[0];
  for (let index = 1; index < array.length; index += 1) {
    minNumber = Math.min(minNumber, array[index]);
  }
  return array.indexOf(minNumber);
}

console.log(returnMinValue([2, 4, 6, 7, 10, 0, -3]));

