/*
Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
Copie o código abaixo.
*/

const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // linha retirada. Funcionava quando as variáveis eram declaradas com 'var'.
}

testingScope(true);
