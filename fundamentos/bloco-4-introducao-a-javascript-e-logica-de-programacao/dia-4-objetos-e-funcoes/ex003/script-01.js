/*
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
3 - Faça um for/in que mostre todas as chaves do objeto. 
4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
*/

//Questão 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda(o), ${info.personagem}`);

//Questão 2
info['recorrente'] = 'Sim';
  console.log(info);

//Questão 3
for (let index in info) {
  console.log(index);
}

//Questão 4
for (let index in info) {
    console.log(info[index]);
}

//Questão 5
let newInfo = {
  personagem: "Tio Patinhas",
  origem: "Christimas on Bear Mountain, Dell's Four Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

for (let index in info) {
  if (index === 'recorrente' && info[index] === 'Sim' && newInfo[index] === 'Sim') {
    console.log("Ambos recorrentes");
  } else if (index === 'recorrente' && info[index] === 'Não' && newInfo[index] === 'Não') {
    console.log("Ambos não recorrentes");
  } else {
    console.log(info[index] + ' e ' + newInfo[index]);
  }
}

