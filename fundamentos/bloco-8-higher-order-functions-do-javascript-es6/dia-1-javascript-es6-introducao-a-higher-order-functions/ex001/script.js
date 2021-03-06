/*
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente 
um email no formato nome_da_pessoa@trybe.com .
*/

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const infoPerson = (fullName) => {
  return {
    nomeCompleto: `${fullName}`,
    email: `${fullName.replace(' ','_').toLowerCase()}@trybe.com`,
  };
}

console.log(newEmployees(infoPerson));

/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros 
o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: 
"Tente novamente" ou "Parabéns você ganhou").
*/

const showResult = (num, func) => {
  const winner = Math.ceil(Math.random() * 5);
  return func(num, winner);
}

const checkResult = (num, winner) => ( num === winner ? `Parabéns você ganhou` : `Tente novamente`);


console.log(showResult(5, checkResult));

/*
3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de
respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e 
faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
    - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") 
        não altera-se a contagem.
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculateGrade = (arrayTemplate, arrayResponse, func) => {
  return func(arrayTemplate, arrayResponse);
};

const checkAnswers = (arrayTemplate, arrayResponse) => {
  let points = 0;
  for (let index = 0; index < arrayTemplate.length; index += 1) {
    if (arrayTemplate[index] === arrayResponse[index]) {
      points += 1;
    } else if ('N.A' !== arrayResponse[index]) {
      points -= 0.5;
    }
  }
  return points;
}

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));