const createHttpError = require('http-errors');

module.exports.getByAuthor = async (req, res, next) => {
  const { Model, params: { id } } = req;
  const objects = await Model.findByAuthor(id);

  if (objects) {
    res.send(objects);
  } else {
    next(createHttpError(404, 'Object not found', { test: true }));
  }
};

