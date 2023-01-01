const createHttpError = require('http-errors');
const NotFoundError = require('../errors/NotFoundError');

module.exports.create = async (req, res, next) => {
  const { Model } = req;
  const newObj = await Model.create(req.body);
  res.send(newObj);
};

module.exports.getAll = async (req, res, next) => {
  const { Model } = req;
  const objects = await Model.findAll();
  res.send(objects);
};

module.exports.get = async (req, res, next) => {
  const { Model, params: { id } } = req;
  
  const foundObj = await Model.findOne(id);

  if (foundObj) {
    res.send(foundObj);
  } else {
    next(createHttpError(404, 'Object not found', { test: true }));
  }
};

module.exports.delete = async (req, res, next) => {
  const { Model, params: { id } } = req;

  try {
    const deletedObj = await Model.delete(id);
    res.send(deletedObj);
  } catch (error) {
    next(new NotFoundError(error.message));
  }
};

module.exports.update = async (req, res, next) => {
  const { Model, params: { id }, body } = req;

  try {
    const updatedObj = await Model.update(id, body);
    res.send(updatedObj);
  } catch (error) {
    next(error);
  }
};


