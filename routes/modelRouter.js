const express = require("express");
const {
  validateModelMW,
  validateModelUpdateMW,
} = require("../middlewares/modelMW");
const ModelController = require("../controllers/model.controller");

const modelRouter = express.Router();

modelRouter
  .route("/")
  .get(ModelController.getAll)
  .post(validateModelMW, ModelController.create);
modelRouter
  .route("/:id")
  .get(ModelController.get)
  .put(validateModelUpdateMW, ModelController.update)
  .delete(ModelController.delete);

modelRouter
  .route("/:authorId/books").get((req, res) => {
  const {
    params: { authorId },
  } = req;
  return res.redirect(`/api/books/byAuthor/${authorId}`);
});

modelRouter.route("/:authorId/book/:bookId").get((req, res) => {
  const {
    params: { bookId },
  } = req;
  return res.redirect(`/api/book/${bookId}`);
});

module.exports = modelRouter;
