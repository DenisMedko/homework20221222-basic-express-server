const express = require("express");
const {
  validateBookMW,
  validateBookUpdateMW,
} = require("../middlewares/bookMW");
const ModelController = require("../controllers/model.controller");
const BookController = require("../controllers/book.controller");

const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(ModelController.getAll)
  .post(validateBookMW, ModelController.create);
bookRouter
  .route("/:id")
  .get(ModelController.get)
  .put(validateBookUpdateMW, ModelController.update)
  .delete(ModelController.delete);
bookRouter
  .route("/byAuthor/:id")
  .get(BookController.getByAuthor)
 
module.exports = bookRouter;
