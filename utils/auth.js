const Passport = require('passport');
const Boom = require('@hapi/boom');
const msg = require('../config/messages');

getAuthenticate = (strategy) => {
    return (req, res, next) => {
        Passport.authenticate(strategy,
            { session: false },
            (error, user) => {
                        if (error) { return next(error); }
                        if (!user) {
                            return res.json(Boom.unauthorized(msg.authMsg.INVALID_DATA));
                        }
                        return next();
                    })(req, res, next);
    };
}

module.exports = getAuthenticate;