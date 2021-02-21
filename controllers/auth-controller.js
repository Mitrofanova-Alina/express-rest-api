const Boom = require('@hapi/boom');
const StatusCodes = require('http-status-codes');
const UsersService = require('../services/users-service');
const JWT = require('../utils/jwt');
const msg = require('../config/messages');
const config = require('../config/config');

class UsersController {
    createUser = (req, res) => {
        const payload = {
            username: req.body.username,
            password: req.body.password,
            time: Date.now()
        };
        const token = JWT.generate(payload, config.tokenType);
        const  user = {
            ...req.body,
            token
        };
        delete user.password;
        return UsersService
            .addUser(user)
            .then(() => res.status(StatusCodes.OK).send(user))
            .catch(error => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error));
    }

    getUser = (req, res) => {
        const payload = {
            ...req.body,
            time: Date.now()
        };
        return UsersService
            .getUser(payload.username)
            .then(user => {
                const { username, password } = JWT.decode(user.token, config.tokenType);
                if (username === payload.username && password === payload.password) {
                    const token = JWT.generate(payload, config.tokenType);
                    UsersService
                        .updateUser(username, { token })
                        .then(() => res.status(StatusCodes.OK).send({ token }))
                        .catch(error => res.json(error));
                } else
                    res.json(Boom.badData(msg.authMsg.BAD_DATA));
            })
            .catch(error => res.json(error));
    }
}

module.exports = new UsersController();