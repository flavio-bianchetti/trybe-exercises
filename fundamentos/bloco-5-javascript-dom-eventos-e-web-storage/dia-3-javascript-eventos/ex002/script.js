function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
/* Exercício 1 */
  function createDezDaysList() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ulDays = document.querySelector('#days');

  for (let index of dezDaysList) {
    let liDay = document.createElement('li');
    liDay.classList.add('day');
    liDay.innerText = index;
    if (index === 24 || index === 25 || index === 31) {
        liDay.classList.add('holiday');
    }
    if (index === 4 || index === 11 || index === 18 || index === 25) {
        liDay.classList.add('friday');
    }
    ulDays.appendChild(liDay);
  }
}

createDezDaysList();

/* Exercício 2 */

function createBtnHoliday(nameBtn) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerHTML = nameBtn;
  buttonsContainer.appendChild(btnHoliday);
}

createBtnHoliday("Feriados");

/* Exercício 3 */

let btnHolidayClick = document.querySelector('#btn-holiday');

btnHolidayClick.addEventListener('click', handleChangeBGHolidays);

function handleChangeBGHolidays() {
    let holiday = document.getElementsByClassName('holiday');
    for (let index = 0; index < holiday.length; index += 1) {
        if (holiday[index].style.backgroundColor === 'rgb(238, 238, 238)' || 
        holiday[index].style.backgroundColor === '') {
            holiday[index].style.backgroundColor = 'rgb(188, 188, 188)';
        } else {
            holiday[index].style.backgroundColor = 'rgb(238, 238, 238)';
        }
    }
}

/* Exercício 4 */

function createBtnFriday(nameBtn) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let btnFriday = document.createElement('button');
    btnFriday.id = 'btn-friday';
    btnFriday.innerHTML = nameBtn;
    buttonsContainer.appendChild(btnFriday);
  }
  
  createBtnFriday("Sexta-feira");

  /* Exercício 5 */

  let btnFridayClick = document.querySelector('#btn-friday');

  btnFridayClick.addEventListener('click', handleChangeTextFridays);
  
  function handleChangeTextFridays() {
      let friday = document.getElementsByClassName('friday');
      let fridayDays = [4, 11, 18, 25];
      for (let index = 0; index < friday.length; index += 1) {
          if (friday[index].innerText === 'Sexta-feira') {
              friday[index].innerText = fridayDays[index];
          } else {
              friday[index].innerText = 'Sexta-feira';
          }
      }
  }

  /* Exercício 6 */
function mouseInDay() {
  let ulDays = document.querySelector('#days');
  ulDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}


function mouseOutDay() {
  let ulDays = document.querySelector('#days');
  ulDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

mouseInDay();
mouseOutDay();

/* Exercício 7 */
function createTask(task) {
  let myTasks = document.querySelector('.my-tasks');
  let mySpan = document.createElement('span');
  mySpan.innerHTML = task;
  myTasks.appendChild(mySpan);
}

createTask('Projeto:');

/* Exercício 8 */
function colorTask(color) {
  let myTasks = document.querySelector('.my-tasks');
  let divTask = document.createElement('div');
  divTask.style.backgroundColor = color;
  divTask.className = 'task';

  myTasks.appendChild(divTask);
}

colorTask('green');

/* Exercício 9 */
function selectTask() {
  let mySelectedTask = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');
  myTask.addEventListener('click', function(event) {
    if (mySelectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

selectTask();

/* Exercício 10 */
function selectDaysOfTask() {
  let mySelectedTask = document.getElementsByClassName('task selected');
  let ulDays = document.querySelector('#days');
  ulDays.addEventListener('click', function(event) {
    if (mySelectedTask.length === 0) {
      event.target.style.color = 'rgb(119, 119, 119)';
    } else {
      event.target.style.color = mySelectedTask[0].style.backgroundColor;
    }
  });
}

selectDaysOfTask();

function randomColor() {
  let color = 'rgb(';
  for (let index = 0; index < 3; index += 1) {
    color += Math.floor(Math.random() * 255).toString(10);
    if (index < 2) {
      color += ', ';
    }
  }
  color += ')';
  return color;
}

function insertNewTask(event) {
  const taskInput = document.querySelector('#task-input');

  if (taskInput.value !== '') {
    createTask(taskInput.value);
    colorTask(randomColor());
    taskInput.value = '';
  } else {
    window.alert('[ERRO] - Insira um compromisso para continuar');
    taskInput.focus();
  }
}

/* Exercício 11 */
function btnInsertNewTask() {
  const taskButton = document.querySelector('#btn-add');
  taskButton.addEventListener('click', insertNewTask);
}

btnInsertNewTask();

function colorSelectedTask(event) {
  const selectedTask = document.getElementsByClassName('selected')[0];
  const task = event.target;
  if (selectedTask) {
    selectedTask.classList.remove('selected');
    task.classList.add('selected');
  } else {
    task.classList.add('selected');
  }
}

function getColorSelectedTask() {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  myTasks.addEventListener('click', colorSelectedTask);
}

getColorSelectedTask();

function codeInput(event) {
  const code = event.keyCode;
  if (code === 13) {
    insertNewTask();
  }
}

function keyCodeInput() {
  const input = document.getElementById('task-input');
  input.addEventListener('keypress', codeInput);
}

keyCodeInput();
