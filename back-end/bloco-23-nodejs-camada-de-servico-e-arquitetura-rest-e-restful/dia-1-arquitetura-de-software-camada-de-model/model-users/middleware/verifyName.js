const verifyName = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    return res.status(400).json({ message: 'Os campos "nome" e "sobrenome" são obrigatórios' });
  }
  next();
};

module.exports = verifyName;