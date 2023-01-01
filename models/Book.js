const Model = require("./Model");

class Book extends Model {
  static dataTable = [];
  static className = 'Book';
  
  static async findByAuthor(id) {
    const filteredArr = await this.dataTable.filter((obj) => obj.author_id === Number(id));
    return filteredArr;
  }
}

module.exports = Book;
