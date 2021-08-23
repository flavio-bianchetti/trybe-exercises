window.onload = function() {
  /* Information about the site */
  let pageTitle = 'Lorem Ipsum';
  let menuItens = [{
    name: 'article 1', 
    link: '#section-1'
  },{
    name: 'article 2', 
    link: '#section-2'
  },{
    name: 'article 3', 
    link: '#section-3'
  },{
    name: 'article 4', 
    link: '#section-4'
  }];

  let firstArticleTitle = 'What is Lorem Ipsum?';
  let firstArticleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  let SecondArticleTitle = 'Where does it come from?';
  let secondArticleText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32"
  + ". The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

  let thirdArticleTitle = 'Why do we use it?';
  let thirdArticleText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

  let fourthArticleTitle = 'Where can I get some?';
  let fourthArticleText = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

  /* create the structure*/
  createHtmlElement('body', 'header', 'header', '');
  createHtmlElement('body', 'nav', 'menu', '');
  createHtmlElement('.menu', 'ul', 'ul-menu', '');
  createHtmlElement('body', 'main', 'main', '');
  createHtmlElement('.main', 'article', 'article', '');
  createHtmlElement('.main', 'aside', 'right-bar', '');
  createHtmlElement('body', 'footer', 'footer', '');
  createHtmlElement('footer', 'p', 'paragraph', '');
  createALink('.paragraph', 'https://www.lipsum.com/', 'Lorem Ipsum page');

  /* create the header */
  createHeading('h1', 'h1', pageTitle, '.header', 'center');

  /* create menu */
  createMenu(menuItens);

  /* create main article */
  createArticle('article', 'section-1', firstArticleTitle, 'center', firstArticleText);
  createArticle('article', 'section-2', SecondArticleTitle, 'center', secondArticleText);
  createArticle('article', 'section-3', thirdArticleTitle, 'center', thirdArticleText);
  createArticle('article', 'section-4', fourthArticleTitle, 'center', fourthArticleText);

  /* Create ASide */
  createHeading('h2', 'config', 'Configuration', '.right-bar', 'center');
  createHtmlElement('aside','div','div-aside', '');
  createHeading('h3', 'input-1', 'Background:', '.div-aside', 'center');
  createHtmlElement('.div-aside', 'input', 'bg-1', '');
  createHtmlElement('.div-aside', 'input', 'bg-2', '');
  createHtmlElement('.div-aside', 'input', 'bg-3', '');
  createHeading('h3', 'input-2', 'Text color:', '.div-aside', 'center');
  createHtmlElement('.div-aside', 'input', 'tx-1', '');
  createHtmlElement('.div-aside', 'input', 'tx-2', '');
  createHtmlElement('.div-aside', 'input', 'tx-3', '');
  createHeading('h3', 'input-3', 'Font size:', '.div-aside', 'center');
  createHtmlElement('.div-aside', 'input', 'fontSize', '');
  createHeading('h3', 'input-4', 'Font Weight:', '.div-aside', 'center');
  createHtmlElement('.div-aside', 'input', 'fontWeight', '');
  createHeading('h3', 'input-5', 'Font family:', '.div-aside', 'center');
  createHtmlElement('.div-aside', 'select', 'fontFamily', '');
  createHtmlElement('.fontFamily', 'option', 'font1', 'Arial');
  createHtmlElement('.fontFamily', 'option', 'font2', 'Courier New');
  createHtmlElement('.fontFamily', 'option', 'font3', 'Fantasy');
  createHtmlElement('.fontFamily', 'option', 'font4', 'Georgia');
  createHtmlElement('.fontFamily', 'option', 'font5', 'Verdana');
  createHtmlElement('.div-aside','div','btn-aside', '');
  createHtmlElement('.btn-aside', 'button', 'btn-confirm', 'Style');
  changeMyBGColors(200, 70, 23);
  changeMyTXColors(0, 20, 90);
  changeFontSize(100);
  changeFontWeight(900);
  btnConfirmNewStyle();
}

function getHtmlElement(parent) {
  let local;
  if (parent[0] === '.' || parent[0] === '#') {
    local = document.querySelector(parent);
  } else {
    local = document.getElementsByTagName(parent)[0];
  }
  return local;
}

function createHtmlElement(parent, elementType, elementClass, innerText) {
  let local = getHtmlElement(parent);
  
  let type = document.createElement(elementType);
  if (elementClass.length > 0){
    type.className = elementClass;
    if (innerText !== '') {
      type.innerText = innerText;
    }
  }
  local.appendChild(type);
}

/**
 * Create HTML heading of type h1, h2, h3, h4 and h5.
 * @param {h1,h2,h3,h4,h5} type 
 * @param {description of title} title 
 * @param {Id or Class of parent element. Must include the '#' for ID and '.' to Class} parent 
 * @param {title alignment} position
 */
function createHeading(type, headingId, title, parent, position) {
  let hParent = getHtmlElement(parent);
  let heading = document.createElement(type);
  heading.innerText = title;
  heading.style.textAlign = position;
  heading.id = headingId;
  hParent.appendChild(heading);
}

function createParagraph(parent, content) {
  let pParent = getHtmlElement(parent);
  let pTag = document.createElement('p');
  pTag.innerText = content;
  pTag.style.padding = '10px';
  pParent.appendChild(pTag);
}

function createALink(parent, href, content) {
  const myparent = getHtmlElement(parent);
  const myALink = document.createElement('a');
  myALink.innerText = content;
  myALink.href = href;
  myALink.target = '_blank';
  myparent.appendChild(myALink);
}

/* create the menu */
function createMenu(object) {
  const ulMenu = document.querySelector('.ul-menu');
  ulMenu.setAttribute('type', 'none');
  ulMenu.setAttribute('list-style-type', 'none');

  for (let index = 0; index < object.length; index += 1) {
    let liUl = document.createElement('li');
    liUl.style.float = 'left';
    liUl.style.paddingLeft = '10px';
    liUl.style.marginTop = '-15px';
    let aLi = document.createElement('a');
    aLi.innerText = object[index].name;
    aLi.style.display = 'block';
    aLi.setAttribute('href', object[index].link);
    liUl.appendChild(aLi);
    ulMenu.appendChild(liUl);
  }
}

/* create the article */
function createArticle(parent, id, title, position, content) {
  
  createHtmlElement(parent, 'section', id, '');
  
  let parentElement = getHtmlElement(parent);
  let section = parentElement.lastElementChild;
  section.Id = id;
  // parentElement.appendChild(section);
  
  createHeading('h2', id, title,'.' + id, position);
  createParagraph('.' + id, content);
}

function changeMyBGColors(bg1, bg2, bg3) {
  let rgb1 = bg1;
  let rgb2 = bg2;
  let rgb3 = bg3;
  const myHeader = document.getElementsByTagName('header')[0];
  const myArticle = document.getElementsByTagName('article')[0];
  const myAside = document.getElementsByTagName('aside')[0];
  const myFooter = document.getElementsByTagName('footer')[0];
  if (rgb1 === '') {
    rgb1 = 255;
  }
  if (rgb2 === '') {
    rgb2 = 255;
  }
  if (rgb3 === '') {
    rgb3 = 255;
  }
  myHeader.style.backgroundColor = ('rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')');
  myArticle.style.backgroundColor = 'rgba(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ', 0.6)';
  myAside.style.backgroundColor = 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ', 0.3)';
  myFooter.style.backgroundColor = 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';
}

function changeMyTXColors(bg1, bg2, bg3) {
  let rgb1 = bg1;
  let rgb2 = bg2;
  let rgb3 = bg3;
  const myBody = document.getElementsByTagName('body')[0];
  if (rgb1 === '') {
    rgb1 = 0;
  }
  if (rgb2 === '') {
    rgb2 = 0;
  }
  if (rgb3 === '') {
    rgb3 = 0;
  }
  myBody.style.color = ('rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')');
}

function changeFontSize(fsize) {
  const myBody = document.getElementsByTagName('body')[0];
  let fontSize = fsize;
  if (fontSize === '') {
    fontSize = 100;
  }
  myBody.style.fontSize = fontSize + '%';
}

function changeFontWeight(fWeight) {
  const myBody = document.getElementsByTagName('body')[0];
  let fontWeight = fWeight;
  if (fontWeight === '') {
    fontWeight = 0;
  }
  myBody.style.fontWeight = fontWeight.toString(10);
}

function configInput() {
  const input = document.getElementsByTagName('input');

  for (let index = 0; index < 6; index += 1) {
    input[index].type = 'number';
    input[index].min = '0';
    input[index].max = '255';
  }

  input[6].type = 'number';
  input[6].min = '0';
  input[6].max = '200';

  input[7].type = 'number';
  input[7].min = '0';
  input[7].max = '900';
}

function changeFontFamily(){
  const body = document.getElementsByTagName('body')[0];
  const fontFamily = document.getElementsByClassName('fontFamily')[0];
  switch (fontFamily.selectedIndex) {
    case 0 : 
      body.style.fontFamily = 'arial, sans-serif';
      break;
    case 0 : 
      body.style.fontFamily = 'Courier, monospace';
      break;
    case 0 : 
      body.style.fontFamily = 'fantasy';
      break;
    case 0 : 
      body.style.fontFamily = 'Georgia, Times, serif';
      break;
    case 0 : 
      body.style.fontFamily = 'verdana, arial, helvetica, sans-serif';
      break;
    default:
      body.style.fontFamily = 'cursive';
  }
}

function confirmNewStyle(event) {
  const bg1 = document.getElementsByClassName('bg-1')[0];
  const bg2 = document.getElementsByClassName('bg-2')[0];
  const bg3 = document.getElementsByClassName('bg-3')[0];
  const tx1 = document.getElementsByClassName('tx-1')[0];
  const tx2 = document.getElementsByClassName('tx-2')[0];
  const tx3 = document.getElementsByClassName('tx-3')[0];
  const fontSize = document.getElementsByClassName('fontSize')[0];
  const fontWeight = document.getElementsByClassName('fontweight')[0];
  const fontFamily = document.getElementsByClassName('fontFamily')[0];
  
  changeMyBGColors(bg1.value, bg2.value, bg3.value);
  changeMyTXColors(tx1.value, tx2.value, tx3.value);
  changeFontSize(fontSize.value);
  changeFontWeight(fontWeight.value);
}

function btnConfirmNewStyle() {
  const button = document.getElementsByClassName('btn-confirm')[0];
  button.addEventListener('click', confirmNewStyle);
}
