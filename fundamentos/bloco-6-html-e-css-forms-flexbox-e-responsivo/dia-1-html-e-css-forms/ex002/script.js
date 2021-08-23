const state = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal',
  'Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais',
  'Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte',
  'Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const acronymState = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT',
  'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP',
  'SE', 'TO'];

window.onload = function initPage() {
  sectionEstate(state,acronymState);
  inputValidateDate();
}

function sectionEstate(state, acronymState) {
  const selectState = document.getElementById('state');
  for (let index = 0; index < state.length; index += 1) {
    let option = document.createElement('option');
    option.value = acronymState[index];
    option.innerText = state[index];
    selectState.appendChild(option);
  }
}

function dayTest(value) {
    let result = false;
    if (parseInt(value)) {
      if (value > 0 && value < 32) {
        result = true;
      }
    }
    return result;
  }
  
  function monthTest(value) {
    let result = false;
    if (parseInt(value)) {
      if (value > 0 && value < 13) {
        result = true;
      }
    }
    return result;
  }
  
  function yearTest(value) {
    let result = false;
    if (parseInt(value)) {
      if (value > 1900 && value < 2022) {
        result = true;
      }
    }
    return result;
  }

function validateDate(event) {
  const inputDate = document.getElementById('date');
  const arrayDate = event.target.value.split('/');
  if (dayTest(arrayDate[0]) && monthTest(arrayDate[1]) && yearTest(arrayDate[2])) {
    console.log('data ok');
  } else {
    window.alert('[ERRO] - Data inválida!');
    inputDate.target.value = '';
  }
}

function inputValidateDate() {
  const inputDate = document.getElementById('date');
  inputDate.addEventListener('focusout', validateDate);
}

function submitForm(event) {
  event.preventDefault();
  console.log('cheguei aqui.');
}

function btnSubmitForm() {
  const btnConfirm = document.getElementById('btn-confirm');
  btnConfirm.addEventListener('click', submitForm);
}
