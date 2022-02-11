const fs = require('fs').promises;

async function writeMyFile(fileName, content) {
  try {
    await fs.writeFile(fileName, content, { flag: 'w' });
    return 'ok';
  } catch (err) {
    return 'ocorreu um erro.';
  }
}

writeMyFile('./my_file.txt', 'Hi, I am Flávio!');

module.exports = writeMyFile;
