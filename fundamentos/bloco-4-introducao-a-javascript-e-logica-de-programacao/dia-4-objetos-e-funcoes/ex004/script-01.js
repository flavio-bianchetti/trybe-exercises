/*
1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
        Exemplo de palíndromo: arara .
        verificaPalindrome('arara') ;
        Retorno esperado: true
        verificaPalindrome('desenvolvimento') ;
        Retorno esperado: false

*/

function verificaPalindrome (word) {
  let newWord = word.split("").reverse().join("");
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('desenvolvimento'));

