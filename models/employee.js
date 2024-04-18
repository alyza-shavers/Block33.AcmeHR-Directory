const { Model } = require('objection');

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }

  static get relationMappings() {
    const Department = require('./department');

    return {
      department: {
        relation: Model.BelongsToOneRelation,
        modelClass: Department,
        join: {
          from: 'employees.department_id',
          to: 'departments.id',
        },
      },
    };
  }
}

module.exports = Employee;
