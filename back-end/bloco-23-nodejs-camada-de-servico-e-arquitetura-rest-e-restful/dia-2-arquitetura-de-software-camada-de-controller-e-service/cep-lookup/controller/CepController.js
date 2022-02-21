const CepServices = require('../service/CepServices');

const isValid = async (req, res) => {
  const { cep } = req.params;
  const response = await CepServices.isValid(cep);
  if (response.code === 400 || response.code === 404) {
    return res.status(response.code).json(
      { 'error': { 'code': `${response.codeMessage}`, 'message': `${response.message}` } }
    );
  }

  return res.status(response.code).json(`${response.message}`);
}

module.exports = {
  isValid,
};