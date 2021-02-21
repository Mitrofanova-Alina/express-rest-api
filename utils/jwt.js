const JWT = require('jsonwebtoken');
const Secrets = require('../utils/auth-secrets');
const msg = require('../config/messages');
const UsersService = require('../services/users-service');

class JWTToken {
    generate = (payload, type) => {
        return JWT.sign(payload, Secrets[type], { expiresIn: '5m' });
    }

    decode = (token, type) => {
        return JWT.verify(token, Secrets[type], {ignoreExpiration: true});
    }

    verify = (token, fin) => {
        return UsersService.getUser({ token })
            .then(() => {
                const { username } = JWT.verify(token, Secrets.auth);
                fin(null, username);
            })
            .catch(error => fin(null, false, error));
    }
}

module.exports = new JWTToken();