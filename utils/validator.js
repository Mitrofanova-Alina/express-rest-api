const AJV = require('ajv');
const Boom = require('@hapi/boom');
const msg = require('../config/messages');

const ajv = new AJV();

getValidator = (schema) => {
    const validate = ajv.compile(schema);
    return (req, res, next) => {
        if (!validate(req)) {
            return res.json(Boom.badRequest(msg.validMsg.BAD_DATA, validate.errors));
        }
        return next();
    }
}

module.exports = getValidator;