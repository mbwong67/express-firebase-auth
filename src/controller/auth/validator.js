import joi from 'joi'

module.exports = {
    registerValidation: (data, options) => {
        const schema = joi.object({
            name: joi.string().min(6).required(),
            email: joi.string().min(6).required().email(),
            password: joi.string().min(6).required(),
            repeat_password: joi.ref('password'),
        })

        return schema.validate(data, options);
    },
    loginValidation: (data, options) => {
        const schema = joi.object({
            email: joi.string().min(6).required().email(),
            password: joi.string().min(6).required(),
        })

        return schema.validate(data, options);
    }
}