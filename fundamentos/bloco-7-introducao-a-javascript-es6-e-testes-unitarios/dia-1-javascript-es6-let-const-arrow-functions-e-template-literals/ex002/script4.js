let clickCount = 0;

const counter = () => {
  const button = document.getElementById('btn');
  button.addEventListener('click', () => {
    const span = document.getElementById('span');
    clickCount += 1;
    span.innerText = clickCount.toString();
  });
};

window.onload = () => {
  counter();
}
