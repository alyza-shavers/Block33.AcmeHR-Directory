const Employee = require('../models/employee');
const Department = require('../models/department');

module.exports = {
  async getAllEmployees(req, res, next) {
    try {
      const employees = await Employee.query();
      res.json(employees);
    } catch (err) {
      next(err);
    }
  },

  async createEmployee(req, res, next) {
    try {
      const employee = await Employee.query().insert(req.body);
      res.status(201).json(employee);
    } catch (err) {
      next(err);
    }
  },

  async deleteEmployee(req, res, next) {
    try {
      await Employee.query().deleteById(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  },

  async updateEmployee(req, res, next) {
    try {
      const employee = await Employee.query().patchAndFetchById(req.params.id, req.body);
      res.json(employee);
    } catch (err) {
      next(err);
    }
  },

  async getAllDepartments(req, res, next) {
    try {
      const departments = await Department.query();
      res.json(departments);
    } catch (err) {
      next(err);
    }
  },

  errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: err.message });
  },
};
