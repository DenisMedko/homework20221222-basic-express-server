const {
  BOOK_CREATION_SCHEMA,
  BOOK_UPDATE_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateBookMW = async (req, res, next) => {
  try {
    await BOOK_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error); 
  }
};

module.exports.validateBookUpdateMW = async (req, res, next) => {
  try {
    await BOOK_UPDATE_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
