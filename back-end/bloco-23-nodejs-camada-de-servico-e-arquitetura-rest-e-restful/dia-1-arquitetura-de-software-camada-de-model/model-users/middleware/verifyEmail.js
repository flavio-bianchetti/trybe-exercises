const verifyEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    next();
  };
  
  module.exports = verifyEmail;