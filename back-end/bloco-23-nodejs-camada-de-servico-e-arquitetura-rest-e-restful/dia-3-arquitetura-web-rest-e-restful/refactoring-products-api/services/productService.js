// aqui ficam as regras de negócio. Elas não serão elaboradas neste exercício.
const ProductModel = require('../models/productModel');

const getAll = async () => {
  return ProductModel.getAll();
};

const getById = (id) => {
  return ProductModel.getById(id);
};

const add = (name, brand) => {
  return ProductModel.add(name, brand);
};

const exclude = (id) => {
  return ProductModel.exclude(id);
};

const update = (id, name, brand) => {
  return ProductModel.update(id, name, brand);
};

module.exports = {
  getAll,
  getById,
  add,
  exclude,
  update,
}
