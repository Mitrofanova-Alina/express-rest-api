const Boom = require('@hapi/boom');
const { v4: uuid } = require('uuid');
const { dbEmployees } = require('./database');
const msg = require('../config/messages');
const config = require('../config/config');

class EmployeesService {
    async getAllEmployees(pageNum, filters) {
        const start = (pageNum - 1) * config.pageSize;
        const end = start + config.pageSize;
        return dbEmployees
            .get("employees")
            .filter(filters)
            .sortBy('salary')
            .slice(start, end)
            .value();
    }

    async getEmployee(id) {
        const item = await dbEmployees
            .get("employees")
            .find({id: id})
            .value();
        if (!item) {
            throw Boom.notFound(msg.employeeMsg.NOT_FOUND(id));
        }
        return item;
    }

    async deleteEmployee(id) {
        const item = await dbEmployees
            .get("employees")
            .remove({id: id})
            .write();
        if (item.length === 0) {
            throw Boom.notFound(msg.employeeMsg.NOT_FOUND(id));
        }
        return item;
    }

    async addEmployee(data) {
        const id = await uuid();
        const item = dbEmployees
            .get("employees")
            .push({ id: id, ...data})
            .write();
        if (!item) {
            throw Boom.notFound(msg.employeeMsg.NOT_FOUND);
        }
        return item;
    }

    async updateEmployee(id, data) {
        const item = dbEmployees
            .get("employees")
            .find({id: id})
            .assign(data)
            .write();
        return item;
    }
}

module.exports = new EmployeesService();