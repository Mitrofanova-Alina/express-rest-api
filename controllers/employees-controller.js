const Boom = require('@hapi/boom');
const StatusCodes = require('http-status-codes');
const EmployeesService = require('../services/employees-service');
const msg = require('../config/messages');

class EmployeesController {
    getAllEmployees = (req, res) => {
        const filters = {...req.query};
        delete filters.page_num;

        return EmployeesService
            .getAllEmployees(req.query.page_num || 1, filters)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(() => res.json(error));
    }

    getEmployee = (req, res) => {
        const id = req.params.id;
        return EmployeesService
            .getEmployee(id)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(error => res.json(error));
    }

    deleteEmployee = (req, res) => {
        const id = req.params.id;

        return EmployeesService
            .deleteEmployee(id)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(() => res.json(error));
    }

    createEmployee = (req, res) => {
        const employee = {
            ...req.body,
            salary: Number(req.body.salary)
        };
        console.log(employee);

        return EmployeesService
            .addEmployee(employee)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(error => res.json(error));
    }

    updateEmployee = (req, res) => {
        const id = req.params.id;

        return EmployeesService
            .updateEmployee(id, req.body)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(error => res.json(error));
    }
}

module.exports = new EmployeesController();
