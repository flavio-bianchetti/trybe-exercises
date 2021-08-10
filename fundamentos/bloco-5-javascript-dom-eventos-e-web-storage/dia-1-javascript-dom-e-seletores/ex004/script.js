const header_container = document.getElementById('header-container');
const emergency_tasks = document.querySelector('.emergency-tasks');
const no_emergency_tasks = document.querySelector('.no-emergency-tasks');
const footer_container = document.getElementsByTagName('footer');

header_container.style.backgroundColor = "forestgreen";

emergency_tasks.style.backgroundColor = "lightsalmon";
emergency_tasks.querySelectorAll("h3")[0].style.backgroundColor = "deeppink";
emergency_tasks.querySelectorAll("h3")[1].style.backgroundColor = "deeppink";

no_emergency_tasks.style.backgroundColor = "gold";
no_emergency_tasks.querySelectorAll("h3")[0].style.backgroundColor = "black";
no_emergency_tasks.querySelectorAll("h3")[1].style.backgroundColor = "black";

footer_container[0].style.backgroundColor = "darkgreen";
