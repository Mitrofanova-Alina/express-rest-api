const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees-controller');

router.route('/')
    .get(EmployeesController.getAll)
    .delete(EmployeesController.deleteAll)
    .post(EmployeesController.post);

router.route('/:id')
    .get(EmployeesController.getOne)
    .delete(EmployeesController.deleteOne)
    .post(EmployeesController.put);

module.exports = router;
