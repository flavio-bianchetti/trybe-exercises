const validateEmail = require('../util/validateEmail');

const setUser = (req, res, next) => {
  const { username, email, password } = req.body;
  if(!username || username.length <= 3
    || !email ||  !validateEmail(email)
    || !password || password.length < 4 
    || password.length > 8) {
      return res.status(400).json({ message: 'invalid data' });
    }

    return res.status(201).json({ message: 'user created' });
};

module.exports = setUser;
