const CepModel = require('../model/CepModel');

const isValid = async (cep) => {
  if (!cep.match(/[0-9]{5}-?[\d]{3}/)) {
    return {
      code: 400,
      codeMessage: 'invalidData',
      message: 'CEP inválido',  
    };
  }

  const response = await CepModel.findCep(cep);

  if (!response) {
      return {
        code: 404,
        codeMessage: 'notFound',
        message: 'CEP não encontrado',
      }
  }

  return {
    code: 200,
    codeMessage: 'success',
    message: response,
  }
};

module.exports = {
  isValid,
};
