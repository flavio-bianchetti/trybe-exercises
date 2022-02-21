const connection = require('./connection');

const getStatus = async () => {
  return await connection.execute(
    'SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = ? AND table_name = ?',
    [process.env.MYSQL_DB_NAME, process.env.MYSQL_TABLE_NAME]
  )
  .then(() => true)
  .catch(() => false);
}

module.exports = {
  getStatus,
};
