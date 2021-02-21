const Boom = require('@hapi/boom');
const { v4: uuid } = require('uuid');
const { dbUsers } = require('./database');
const msg = require('../config/messages');
const config = require('../config/config');

class UsersService {
    async getUser(username) {
        const item = await dbUsers
            .get("users")
            .find({username: username})
            .value();
        if (!item) {
            throw Boom.notFound(msg.authMsg.INVALID_TOKEN);
        }
        return item;
    }

    async addUser(data) {
        const id = await uuid();
        const item = dbUsers
            .get("users")
            .push({ id: id, ...data})
            .write();
        if (!item) {
            throw Boom.notFound(msg.userMsg.NOT_FOUND);
        }
    }

    async updateUser(username, data) {
        const item = dbUsers
            .get("users")
            .find({username: username})
            .assign(data)
            .write();
        return item;
    }
}

module.exports = new UsersService();