const validateEmail = require('../util/validateEmail');
const generateToken = require('../util/generateToken');

const validateLogin = (req, res) => {
  const {email, password } = req.body;
  if (!email || !validateEmail(email)
    || !password || isNaN(password)
    || password.length < 4 || password.length > 8) {
      return res.status(400).json({ message: 'email or password is incorrect'});
    }
  return res.status(200).json({ message: `${generateToken()}`});
}

module.exports = validateLogin;