// const Joi = require('joi');

module.exports = function validateRegDetails (body) {
    const schema = Joi.object({
        username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','com.ng'] } }).required(),
        password: Joi.string().required()//.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    });

    return schema.validate(body)
};
