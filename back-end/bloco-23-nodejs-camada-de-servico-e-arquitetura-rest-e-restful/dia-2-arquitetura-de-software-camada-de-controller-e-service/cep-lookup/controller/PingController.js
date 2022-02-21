const PingServices = require('../service/PingServices');

const getStatus = async (_req, res) => {
  const response = await PingServices.getStatus();
  return res.status(response.code).json({message: `${response.message}`});
}

module.exports = {
  getStatus,
};
