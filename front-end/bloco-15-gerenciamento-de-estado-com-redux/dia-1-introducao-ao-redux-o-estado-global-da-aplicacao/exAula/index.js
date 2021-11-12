/*
Exercício de aula
https://codesandbox.io/s/15-1-counter-forked-1o1q3?file=/src/index.js:0-1242
*/
const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

// ========== REDUX ==========

// ========== ACTIONTYPES ==========
const INCREMENTO = { type: "INCREMENTO" };
const DECREMENTO = { type: "DECREMENTO" };

// ========== ACTIONS ==========
const actionIncremento = () => {
  store.dispatch(INCREMENTO);
};

const actionDecremento = () => {
  store.dispatch(DECREMENTO);
};

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);

// ========== REDUCER ==========
const initialState = { counter: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTO":
      return {
        counter: state.counter + 1
      };
    case "DECREMENTO":
      return {
        counter: state.counter === 0 ? 0 : state.counter - 1
      };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

//LINK STORE TO HTML
store.subscribe(() => {
  const { counter } = store.getState();
  showCountValue(counter);
});

