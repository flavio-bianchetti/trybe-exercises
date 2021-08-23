/*
A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
*/

function existsInYourBasket(fruit, yourBasket) {
  for (let index = 0; index < yourBasket.length; index += 1) {
    if (yourBasket[index].fruit === fruit) {
      return index;
    }
  }
  return -1;
}

function contentsOfYourBasket(contents) {
  let result = 'Sua cesta possui: ';

  for (let index = 0; index < contents.length; index += 1) {
    result += `${contents[index].amount} `;
    if (contents[index].amount > 1) {
      result += `${contents[index].fruit + 's'}, `;
    } else {
      result += `${contents[index].fruit}, `;
    }
  }
  return result;
}

function yourBasket(basket) {
    let contentsYourBasket = [];
  for (let index = 0; index < basket.length; index += 1) {
    if (existsInYourBasket(basket[index],contentsYourBasket) < 0) {
      contentsYourBasket.push({fruit: basket[index], amount: 1});
    } else {
      contentsYourBasket[(existsInYourBasket(basket[index],contentsYourBasket))].amount += 1;
    }
  }

  return contentsOfYourBasket(contentsYourBasket);

}

console.log(yourBasket([
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ]));
