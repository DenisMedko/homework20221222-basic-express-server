const {
  MODEL_CREATION_SCHEMA,
  MODEL_UPDATE_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateModelMW = async (req, res, next) => {
  try {
    await MODEL_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error); 
  }
};

module.exports.validateModelUpdateMW = async (req, res, next) => {
  try {
    await MODEL_UPDATE_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
