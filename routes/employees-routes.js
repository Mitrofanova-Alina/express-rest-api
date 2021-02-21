const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees-controller');
const getValid = require('../utils/validator');
const getAuth = require('../utils/auth');
const employeeSchemas = require('../config/employees-shemas');

router.route('/')
    .get(
        getValid(employeeSchemas.getAll),
        EmployeesController.getAllEmployees)
    .post(
        getAuth('bearerAuth'),
        getValid(employeeSchemas.post),
        EmployeesController.createEmployee);

router.route('/:id')
    .get(
        getValid(employeeSchemas.getOne),
        EmployeesController.getEmployee)
    .delete(
        getAuth('bearerAuth'),
        getValid(employeeSchemas.delete),
        EmployeesController.deleteEmployee)
    .put(
        getAuth('bearerAuth'),
        getValid(employeeSchemas.put),
        EmployeesController.updateEmployee);

module.exports = router;
