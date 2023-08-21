import joi from 'joi'

module.exports = {
    registerValidation: (data, options) => {
        const schema = joi.object({
            name: joi.string().min(6).required(),
            username: joi.string().min(6).required(),
            password: joi.string().min(6).required(),
            repeat_password: joi.ref('password'),
        }).with('password', 'repeat_password');

        return schema.validate(data, options);
    },
    loginValidation: (data, options) => {
        const schema = joi.object({
            username: joi.string().min(6).required(),
            password: joi.string().min(6).required(),
        })

        return schema.validate(data, options);
    }
}