/*
Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
*/

function evenNumbers(vector) {
  let newVector = [];

  for (let indexA of vector) {
    for (let indexB of indexA) {
        if (indexB % 2 === 0) {
            newVector.push(indexB);
        }
    }
  }

  return newVector;
}


console.log(evenNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));
