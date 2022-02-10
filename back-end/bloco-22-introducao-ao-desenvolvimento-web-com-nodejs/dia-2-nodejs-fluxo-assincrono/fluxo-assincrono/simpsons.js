const readline = require('readline-sync');
const fs = require('fs').promises;

const simpsons = './simpsons.json';
const simpsonFamily = './simpsonFamily.json';

function readFileSimpsons() {
  fs.readFile(simpsons, 'utf8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((data) => {
    return data.map((character) => console.log(`${character.id} - ${character.name}`));
  })
  .catch((err) => console.log(err));
}


function characterById(id) {
  fs.readFile(simpsons, 'utf8')
    .then((fileContent) => {
        return JSON.parse(fileContent);
    })
    .then((data) => {
        return data.find((character) => character.id === `${id}`);
    })
    .then((character) => {
        console.log(`${character.id} - ${character.name}`);
    })
    .catch((err) => console.log('id não encontrado.'));
}

function removeSelectedCharacters() {
  fs.readFile(simpsons, 'utf8')
    .then((fileContent) => {
        return JSON.parse(fileContent);
    })
    .then((data) => {
        return data.filter((character) => character.id !== '6' && character.id !== '10');
    })
    .then((result) => {
        return result.map((character) => console.log(`${character.id} - ${character.name}`));
    })
    .catch((err) => console.log(err));
}

function newFileSimpsons(){
    fs.readFile(simpsons, 'utf8')
      .then((fileContent) => {
          return JSON.parse(fileContent);
      })
      .then((data) => {
          return data.filter((character) => parseInt(character.id) <= 4);
      })
      .then((result) => {
        fs.writeFile('./simpsonFamily.json', JSON.stringify(result), { flag: 'w'});
        console.log('Arquivo criado/alterado com sucesso!');
      })
      .catch((err) => console.log(err));
  }

  function addNelsonMuntz(){
    fs.readFile(simpsonFamily, 'utf8')
      .then((fileContent) => {
          return JSON.parse(fileContent);
      })
      .then((data) => {
          data.push({
            id: '11',
            name: 'Nelson Muntz',
          })
          return data;
      })
      .then((result) => {
        fs.writeFile('./simpsonFamily.json', JSON.stringify(result), { flag: 'w'});
        console.log('Nelson Muntz adicionado com sucesso!');
      })
      .catch((err) => console.log(`Não foi possível ler o arquivo. \n Erro: ${err}`));
  }

  function replaceNelsonMuntz(){
    fs.readFile(simpsonFamily, 'utf8')
      .then((fileContent) => {
          return JSON.parse(fileContent);
      })
      .then((data) => {
          data.pop();
          data.push({
            id: '11',
            name: 'Maggie Simpson',
          })
          return data;
      })
      .then((result) => {
        fs.writeFile('./simpsonFamily.json', JSON.stringify(result), { flag: 'w'});
        console.log('Nelson Muntz foi substituído por Maggie Simpson.');
      })
      .catch((err) => console.log(`Não foi possível ler o arquivo. \n Erro: ${err}`));
  }


function options() {
  console.log('1 - todos os personagens \n2 - um personagem \n3 - lista sem o personagem 6 e 10 \n4 - novo arquivo gerado \n5 - adicionar Nelson Muntz \n6 - Substituir Nelson Muntz por Maggie Simpson \n');
  const choice = readline.questionInt('Escolha uma opção: ');
    switch (choice) {
      case 1:
        readFileSimpsons();
        break;
      case 2:
        const id = readline.questionInt('Informe o id do personagem: ');
        if (isNaN(id)) {
          throw new Error('Opção inválida!');
        }
        characterById(id);
        break;
      case 3:
        removeSelectedCharacters();
        break;
      case 4:
        newFileSimpsons();
        break;
      case 5:
        addNelsonMuntz();
        break;
      case 6:
        replaceNelsonMuntz();
        break;
      default:
        console.log('Opção inválida! Finalizando...');
    }
}

options();
