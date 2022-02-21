const connection = require('./connection');

const findCep = async (cep) => {
  const [getCep] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  // console.log(getCep, getCep.length);

  if (getCep.length === 0) return null;

  return JSON.stringify(getCep);
}

module.exports = {
  findCep,
};
