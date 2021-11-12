/*
  Exercício
1 - Crie uma store para a nossa aplicação.
2 - Crie um reducer, implementando um switch retornando apenas o estado inicial como default . Não se esqueça de colocar o reducer como parâmetro para o createStore , feito na etapa anterior.
3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e PREVIOUS_COLOR . Essas actions devem alterar o valor index guardado no ESTADO_INICIAL . Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.
4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color , e realizam um dispatch com o respectivo action.type de cada.
5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container . Você deverá ser capaz de ver as cores mudando ao fundo, e o nome da cor exibida.
6 - Crie um botão com o texto Random color , um eventListener e uma action no reducer adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela.
*/

import Redux from "redux";

const ESTADO_INICIAL = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0
};

//Exercício 1
const store = Redux.createStore(reducer);

//Exercício 2
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        index: state.index === 5 ? 0 : state.index + 1
      };
    case "PREVIOUS":
      return {
        ...state,
        index: state.index === 0 ? 5 : state.index - 1
      };
    case "RANDOM":
      return {
        ...state,
        index: action.randomNumber
      };
    default:
      return state;
  }
};

//Exercício 3
const NEXT_COLOR = () => {
  store.dispatch({ type: "NEXT" });
};

const PREVIOUS_COLOR = () => {
  store.dispatch({ type: "PREVIOUS" });
};

//Exercício 4
const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");

buttonNext.addEventListener("click", NEXT_COLOR);
buttonPrevious.addEventListener("click", PREVIOUS_COLOR);

//Exercicio 5
store.subscribe(() => {
  const { colors, index } = store.getState();
  const spanEl = document.getElementById("value");
  spanEl.innerHTML = colors[index];
});

//Exercício 6
const divContainer = document.getElementById("container");
const btnRandomColor = document.createElement("button");
btnRandomColor.type = "button";
btnRandomColor.innerText = "Random color";
btnRandomColor.className = "random";
divContainer.appendChild(btnRandomColor);

btnRandomColor.addEventListener("click", () => {
  const { colors } = store.getState();
  const spanEl = document.getElementById("value");
  const randomNumber = Math.floor(Math.random() * 5.99);
  spanEl.innerHTML = colors[randomNumber];
  store.dispatch({ type: "RANDOM", randomNumber: randomNumber });
});
