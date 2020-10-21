const EmployeesService = require('../services/employees-service');
const msg = require('../config/messages');

class EmployeesController {
    getAll = (req, res) => {
        const employees = EmployeesService.getAll();

        if (!employees) {
            return res.status(404).send({message: msg.err404getAll});
        }

        return res.status(200).send({ data: employees });
    }

    getOne = (req, res) => {
        return res.status(501).send({message: msg.err501 + "getOne"});
    }

    deleteAll = (req, res) => {
        return res.status(501).send({message: msg.err501 + "deleteAll"});
    }

    deleteOne = (req, res) => {
        return res.status(501).send({message: msg.err501 + "deleteOne"});
    }

    post = (req, res) => {
        return res.status(501).send({message: msg.err501 + "post"});
    }

    put = (req, res) => {
        return res.status(501).send({message: msg.err501 + "put"});
    }
}

module.exports = new EmployeesController();
