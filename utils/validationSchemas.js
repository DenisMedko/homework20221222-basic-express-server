const yup = require('yup');

const MODEL_CREATION_SCHEMA = yup.object({
  name: yup.string().required(),
});

const MODEL_UPDATE_SCHEMA = yup.object({
  name: yup.string().required(),
});

const BOOK_CREATION_SCHEMA = yup.object({
  name: yup.string().required(),
  author_id: yup.number().required(),
  publisher_id: yup.number().required(),
  genre_id: yup.number().required(),
  pages: yup.number().required()
  .min(1, "pages count must be more than 0"),
  year: yup.number().required() 
});

const BOOK_UPDATE_SCHEMA = yup.object({
  name: yup.string().required(),
  author_id: yup.number().required(),
  publisher_id: yup.number().required(),
  genre_id: yup.number().required(),
  pages: yup.number().required()
  .min(1, "pages count must be more than 0"),
  year: yup.number().required() 
});

module.exports.MODEL_CREATION_SCHEMA = MODEL_CREATION_SCHEMA;
module.exports.MODEL_UPDATE_SCHEMA = MODEL_UPDATE_SCHEMA;
module.exports.BOOK_CREATION_SCHEMA = BOOK_CREATION_SCHEMA;
module.exports.BOOK_UPDATE_SCHEMA = BOOK_UPDATE_SCHEMA;
