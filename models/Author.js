const Model = require("./Model");

class Author extends Model {
  static dataTable = []; 
  static className = 'Author';
}

module.exports = Author;
