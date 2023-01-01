class Model {

  static async create(data) {
    const newObj = {
      ...data,
      id: Date.now(),
    };

    this.dataTable.push(newObj);

    return newObj;
  }

  static async findAll() {
    return this.dataTable;
  }

  static async findOne(id) {
    const foundObj = await this.dataTable.find((obj) => obj.id === Number(id));
    return foundObj;
  }

  static async delete(id) {
    const foundObj = await this.findOne(id);
    if (foundObj) {
      this.dataTable = await this.dataTable.filter((obj) => obj.id !== Number(id));
      return foundObj;
    }
    throw new Error(`${this.className} id=${id} not found`); 
  }

  static async update(id, newData) {
    const foundObj = await this.findOne(id);
    if (foundObj) {
      Object.assign(foundObj, newData);
      return foundObj;
    }
    throw new Error(`${this.className} id=${id} not found`);  
  }
  
}

module.exports = Model;
