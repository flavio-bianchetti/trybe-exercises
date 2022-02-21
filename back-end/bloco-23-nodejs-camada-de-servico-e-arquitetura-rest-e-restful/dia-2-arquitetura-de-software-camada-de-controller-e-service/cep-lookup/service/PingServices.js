const PingModel = require('../model/PingModel');

const getStatus = async () => {
  const response = await PingModel.getStatus();

  if (!response) {
      return {
        code: 500,
        message: 'Internal server error',
      }
  }

  return {
    code: 200,
    message: 'pong!',
  }
};

module.exports = {
  getStatus,
};
