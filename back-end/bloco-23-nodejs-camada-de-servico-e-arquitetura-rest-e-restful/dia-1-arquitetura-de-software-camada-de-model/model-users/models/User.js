const usersList = require('../users.json');
const fs = require('fs').promises;

const create = async (firstName, lastName, email, password) => {
  return fs.readFile(usersList, 'utf8')
    .then((data) => {
      const users = JSON.parse(data);
      const newId = users.sort((a, b) => a.id - b.id).pop().id + 1;
      users.push({
        id: newId,
        firstName,
        lastName,
        email,
        password,
      });
      fs.writeFile(usersList, JSON.stringify(users));
    })
    .catch(err => console.log(err));
};

const find = async (id) => {
  return fs.readFile(usersList, 'utf8')
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.find(user => user.id === id);
      return user;
    })
    .catch(err => console.log(err));
};

const update = async (id, firstName, lastName, email, password) => {
  return fs.readFile(usersList, 'utf8')
    .then((data) => {
      const users = JSON.parse(data);
      const user = {
        id,
        firstName,
        lastName,
        email,
        password,
      }
      fs.writeFile(usersList, JSON.stringify([...users.filter((user) => user.id !== id), user]));
    })
    .catch(err => console.log(err));
};

const remove = async (id) => {
  return fs.readFile(usersList, 'utf8')
    .then((data) => {
      const users = JSON.parse(data);
      fs.writeFile(usersList, JSON.stringify(users.filter((user) => user.id !== id)));
    })
    .catch(err => console.log(err));
};

module.exports = {
  create,
  find,
  update,
  remove,
};
