/*
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
        Array de teste: [2, 3, 6, 7, 10, 1]; .
        Valor esperado no retorno da função: 4 .
*/

/*
Array.reduce() pode ser usada para encontrar o maior elemento em um vetor numérico, comparando cada valor:
let indiceMaxValue = array.indexOf(array.reduce(function(a, b){ 
                                                    return Math.max(a, b);
                                                }));
*/


function returnMaxValue(array) {
  let maxNumber = array[0];
  for (let index = 1; index < array.length; index += 1) {
    maxNumber = Math.max(maxNumber, array[index]);
  }
  return array.indexOf(maxNumber);
}



console.log(returnMaxValue([2, 3, 6, 7, 10, 1]));

