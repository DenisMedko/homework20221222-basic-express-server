const express = require("express");
const rootRouter = express.Router();
const modelRouter = require("./modelRouter");
const bookRouter = require("./bookRouter");
const Author = require("../models/Author");
const Publisher = require("../models/Publisher");
const Genre = require("../models/Genre");
const Book = require("../models/Book");

rootRouter.use(
  "/authors?",
  (req, res, next) => {
    req.Model = Author;
    next();
  },
  modelRouter
);

rootRouter.use(
  "/publishers?",
  (req, res, next) => {
    req.Model = Publisher;
    next();
  },
  modelRouter
);

rootRouter.use(
  "/genres?",
  (req, res, next) => {
    req.Model = Genre;
    next();
  },
  modelRouter
);

rootRouter.use(
  "/books?",
  (req, res, next) => {
    req.Model = Book;
    next();
  },
  bookRouter
);

rootRouter.use("/", (req, res) =>
  res.send("Hello from root router " + JSON.stringify(req.body))
);

module.exports = rootRouter;
