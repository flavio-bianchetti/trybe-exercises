let firstLi = document.getElementById('firstLi');
let secondLi = document.getElementById('secondLi');
let thirdLi = document.getElementById('thirdLi');
let input = document.getElementById('input');
let myWebpage = document.getElementById('mySpotrybefy');

/*
1 - Copie esse arquivo e edite apenas ele;
2 - Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1 - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3 - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
4 - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
4.1 - Que tal redirecionar para seu portifólio?
5 - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
*/

window.onload = function() {
  firstLi.addEventListener('click', handleChangeTech);
  firstLi.addEventListener('dblclick', resetText);

  secondLi.addEventListener('click', handleChangeTech);
  thirdLi.addEventListener('click', handleChangeTech);

  input.addEventListener('keyup', changeTechText);
  myWebpage.addEventListener('dblclick', handleOpenWebpage);
  myWebpage.addEventListener('mouseover', handleMouseOver);
    
}

function handleChangeTech(element) {
  if (document.getElementsByClassName('tech').length === 0) {
    element.target.classList.add('tech');
  } else {
    document.querySelector('.tech').classList.remove('tech');
    element.target.classList.add('tech');
    input.value = '';
  }
}

function changeTechText() {
    document.querySelector('.tech').innerText = input.value;
}

function handleOpenWebpage() {
    window.open('https://flavio-bianchetti.github.io/', '_blank');
}

function handleMouseOver(element) {
    element.target.style.color = 'blue';
}

function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}
