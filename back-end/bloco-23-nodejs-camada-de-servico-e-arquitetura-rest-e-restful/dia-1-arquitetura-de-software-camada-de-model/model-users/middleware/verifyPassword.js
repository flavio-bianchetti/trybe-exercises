const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'O campo "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = verifyPassword;
