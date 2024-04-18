const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employees', employeeController.getAllEmployees);
router.post('/employees', employeeController.createEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);
router.put('/employees/:id', employeeController.updateEmployee);
router.get('/departments', employeeController.getAllDepartments);
router.use(employeeController.errorHandler);

module.exports = router;
