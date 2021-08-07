/*
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
        Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
        Valor esperado no retorno da função: Fernanda.
*/

function nameMoreCaracters(names) {
  let topName = names[0];

  for (let index = 1; index < names.length; index += 1) {
    if (topName.length < names[index].length) {
      topName = names[index];
    }
  }
  return topName;
}


console.log(nameMoreCaracters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

