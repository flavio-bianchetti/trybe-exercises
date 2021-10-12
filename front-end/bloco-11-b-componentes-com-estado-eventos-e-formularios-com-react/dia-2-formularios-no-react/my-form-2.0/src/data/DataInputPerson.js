const DataInputPerson = [
  {
    name: 'name',
    className: 'name-person',
    type: 'text',
    max: '40',
    required: 'required',
    placeholder: 'Nome completo',
  },
  {
    name: 'email',
    className: 'email-person',
    type: 'email',
    max: '50',
    required: 'required',
    placeholder: 'E-mail',
  },
  {
    name: 'cpf',
    className: 'cpf-person',
    type: 'text',
    max: '11',
    required: 'required',
    placeholder: 'CPF',
  },
  {
    name: 'address',
    className: 'address-person',
    type: 'text',
    max: '200',
    required: 'required',
    placeholder: 'Endereço completo',
  },
  {
    name: 'city',
    className: 'city-person',
    type: 'text',
    max: '28',
    required: 'required',
    placeholder: 'Cidade',
  },
];

export default DataInputPerson;
