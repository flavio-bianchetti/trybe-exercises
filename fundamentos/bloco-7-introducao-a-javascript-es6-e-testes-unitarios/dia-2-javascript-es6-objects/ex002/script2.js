/*
1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3 - Crie uma função para mostrar o tamanho de um objeto.
4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
6 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
7 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
Bônus
1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
*/
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //Exercício 1
  function adicionaTurno(obj, chave, valor) {
    obj[chave] = valor;
  }

  adicionaTurno(lesson2, 'turno', 'manhã');

  console.log(lesson2);

  //Exercício 2
  function listaChaves(obj) {
    console.log(Object.keys(obj));
  }

  //Exercício 3
  function tamanhoObjeto(obj) {
    console.log(obj.length);
  }

  //Exercício 4
  function valoresObjeto(obj) {
    console.log(Object.values(obj));
  }

  // Exercício 5
  const allLessons = Object.assign({}, {lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3});
  console.log(allLessons);

  //Exercício 6
  const numEstudantes = (obj) => console.log(obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes);

  numEstudantes(allLessons);

  //Exercício 7
  const getValueByNumber = (lesson, number) => {
    return Object.values(lesson)[number];
  };

  console.log(getValueByNumber(lesson1, 0));

  //Exercício 8
  const verifyPair = (obj, key, value) => {
    for (let index in obj) {
      if (index === key) {
        if (obj[index] === value) {
          return true;
        }
      }
    }
    return false;
  };

  console.log(verifyPair(lesson3, 'turno', 'noite'));

  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

  //Bônus
  //Exercício 1
  const numAlunosMateria = (allLessons, materia) => {
    numAlunos = 0;
    for (let index in allLessons) {
      if (allLessons[index].materia === materia) {
        numAlunos += allLessons[index].numeroEstudantes;
      }
    }
    return numAlunos;
  };
  
  console.log(allLessons.lesson1.materia);
  console.log(numAlunosMateria(allLessons, 'Matemática'));

  //Exercício 2
  const relatorioProfessor = (allLessons, nome) => {
    const rp = {
      professor: '',
      aulas: [],
      estudantes: 0,
    }
    for (let index in allLessons) {
      if (allLessons[index].professor === nome) {
        rp.professor = nome;
        rp.aulas.push(allLessons[index].materia);
        rp.estudantes += allLessons[index].numeroEstudantes;
      }
    }
    return rp;
  };

  console.log(relatorioProfessor(allLessons,'Maria Clara'));
