const generateToken = () => {
  return Math.random().toString(24).slice(2);
}

module.exports = generateToken;
