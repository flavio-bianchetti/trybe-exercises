/*
7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
        Valor de teste: 'trybe' e 'be'
        Valor esperado no retorno da função: true
        verificaFimPalavra('trybe', 'be') ;
        Retorno esperado: true
        verificaFimPalavra('joaofernando', 'fernan') ;
        Retorno esperado: false
*/

// Melhor solução: deve ser utilizado o String.prototype.substring()
function verificaFimPalavra(word, ending) {
  let countWord = word.length;
  let countEnding = ending.length;
  let wordEnding = "";
  let result = false;

  if (word.length > 0 && ending.length > 0) {
    result = true;
    for (let index = (countWord - countEnding); index < word.length; index += 1) {
      if (word[index] !== ending[index - countEnding - 1]){
          return false;          
      }
    }
  }
  return result;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));

