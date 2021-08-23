const center_content = document.getElementsByClassName('center-content');
const main_content = document.getElementsByTagName('main');
const title = document.getElementsByTagName('h1');
const tag_p = document.getElementsByTagName('p');

/* Exercício 3 */
center_content[0].getElementsByTagName('p')[0].innerHTML = 'Trabalhando com desenvolvimento Web, realizado e feliz.';

/* Exercício 4 */
main_content[0].style.backgroundColor = 'rgb(76, 164, 109)';

/* Exercício 5 */
center_content[0].style.backgroundColor = 'white';

/* Exercício 6 */
title[0].innerHTML = 'Exercício 5.1 - JavaScript';

/* Exercício 7 */
for (let index = 0; index < center_content[0].getElementsByTagName('p').length; index += 1) {
  center_content[0].getElementsByTagName('p')[index].innerHTML = tag_p[index].innerHTML.toUpperCase();
}

/* Exercício 8 */
for (let index of document.getElementsByTagName('p')) {
  console.log(index.innerHTML);
}
