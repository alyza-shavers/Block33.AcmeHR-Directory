const { Model } = require('objection');

class Department extends Model {
  static get tableName() {
    return 'departments';
  }
}

module.exports = Department;
